

import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { username, email, password, number } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password only
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      number, // phone number in plain text (you can validate it)
    });

    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
};








// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log("Login attempt:", { email, password });

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("User not found");
//       return res.status(400).json({ message: "User not found" });
//     }

//     const valid = await bcrypt.compare(password, user.password);
//     if (!valid) {
//       console.log("Invalid password");
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     console.log("JWT_SECRET:", process.env.JWT_SECRET);
//     if (!process.env.JWT_SECRET) {
//       throw new Error("JWT_SECRET is missing from environment variables");
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     console.log("Login successful");
//     res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//     console.error("Login error:", err.message);
//     res.status(500).json({ message: "Login failed", error: err.message });
//   }
// };



export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




