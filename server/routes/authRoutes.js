// import express from "express";
// import { signup, login } from "../controllers/authController.js";
// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);





// // ✅ Admin Login Route
// router.post("/admin-login", async (req, res) => {
//   const { email, password } = req.body;

//   if (email === "admin@skytop.com" && password === "admin123") {
//     const token = jwt.sign({ email }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });
//     return res.json({ token });
//   } else {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }
// });

// export default router;



import express from "express";
import { signup, login } from "../controllers/authController.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Admin Login Route
router.post("/admin-login", async (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@skytop.com" && password === "admin123") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;


