import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import Gallery from "../models/Gallery.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title } = req.body;
    if (!req.file || !title) {
      return res.status(400).json({ message: "file and title required " });
    }

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "gallery",
    });

    const newImage = await Gallery.create({
      imageUrl: result.secure_url,
      public_id: result.public_id,
      title: req.body.title,
    });

    return res.status(201).json({
       message: "Image uploaded",
      url: result.secure_url,
      public_id: result.public_id,
      title: newImage.title,
    });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    // ⚠️ Only return once
    return res.status(500).json({ message: "Upload failed" });
  }
});

// Get all images
router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(images);
  } catch (err) {
    console.error("FETCH ERROR:", err);
    res.status(500).json({ message: "Failed to fetch images" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // 1. Find the image by MongoDB _id
    const image = await Gallery.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // 2. Delete the image from Cloudinary using public_id
    if (image.public_id) {
      await cloudinary.uploader.destroy(image.public_id);
    } else {
      console.warn("No public_id found for image:", req.params.id);
    }

    // 3. Delete from MongoDB
    await image.deleteOne(); // or Gallery.findByIdAndDelete(req.params.id);

    // 4. Send success response
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: "Failed to delete image" });
  }
});

// Edit (update) image title
router.put("/:id", async (req, res) => {
  const { title } = req.body;
  const updated = await Gallery.findByIdAndUpdate(
    req.params.id,
    { title },
    { new: true }
  );
  res.json(updated);
});

export default router;
