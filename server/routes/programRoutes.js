import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import Program from "../models/Program.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Upload a new program
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title, description, date, time } = req.body;

    if (!req.file || !title || !description || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "programs", // Ensure it's not the gallery folder
    });

    const newProgram = await Program.create({
      title: title.trim(),
      description: description.trim(),
      date: date.trim(),
      time: time.trim(),
      imageUrl: result.secure_url,
      public_id: result.public_id,
    });

    return res.status(201).json({
      message: "Program uploaded successfully",
      program: newProgram,
    });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    return res.status(500).json({ message: "Upload failed" });
  }
});



// Get only future programs, sorted by newest first
router.get("/", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const programs = await Program.find({ date: { $gte: today } })
      .sort({ createdAt: -1 }); // newest first
    res.status(200).json(programs);
  } catch (err) {
    console.error("FETCH ERROR:", err);
    res.status(500).json({ message: "Failed to fetch programs" });
  }
});

// ✅ Delete a program and its image from Cloudinary
router.delete("/:id", async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ message: "Not found" });

    // Remove image from Cloudinary
    if (program.public_id) {
      await cloudinary.uploader.destroy(program.public_id);
    }

    await program.deleteOne();
    res.status(200).json({ message: "Program deleted successfully" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: "Failed to delete program" });
  }
});

// ✅ Update a program
router.put("/:id", async (req, res) => {
  try {
    const { title, description, date, time } = req.body;

    const updated = await Program.findByIdAndUpdate(
      req.params.id,
      {
        title: title?.trim(),
        description: description?.trim(),
        date: date?.trim(),
        time: time?.trim(),
      },
      { new: true } // return the updated document
    );

    res.status(200).json(updated);
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ message: "Failed to update program" });
  }
});

export default router;
