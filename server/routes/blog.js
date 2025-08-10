import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";
import Blog from "../models/Blog.js";
import sanitizeHtml from "sanitize-html";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// // Create blog
// router.post('/create', upload.single('image'), (req, res) => {
//   if (!req.file) return res.status(400).json({ error: "Image is required" });

//   const stream = cloudinary.uploader.upload_stream(
//     { resource_type: 'image' },
//     async (error, result) => {
//       if (error) return res.status(500).json({ error: error.message });

//       try {
//         const blog = new Blog({
//           title: req.body.title,
//           slug: req.body.title.toLowerCase().replace(/\s+/g, "-"),
//           author: req.body.author,
//           content: req.body.content,
//           categories: req.body.categories?.split(',').map(c => c.trim()) || [],
//           tags: req.body.tags?.split(',').map(t => t.trim()) || [],
//           imageUrl: result.secure_url,
//         });

//         await blog.save();
//         res.status(200).json(blog);
//       } catch (err) {
//         res.status(500).json({ error: err.message });
//       }
//     }
//   );

//   stream.end(req.file.buffer);
// });





router.post('/create', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Image is required" });

  const stream = cloudinary.uploader.upload_stream(
    { resource_type: 'image' },
    async (error, result) => {
      if (error) return res.status(500).json({ error: error.message });

      try {
        // ✅ Sanitize HTML but keep useful tags
        const cleanContent = sanitizeHtml(req.body.content, {
          allowedTags: [
            'b', 'i', 'em', 'strong', 'a', 
            'ul', 'ol', 'li', 'p', 'br'
          ],
          allowedAttributes: {
            'a': ['href', 'target'],
          },
        });

        const blog = new Blog({
          title: req.body.title,
          slug: req.body.title.toLowerCase().replace(/\s+/g, "-"),
          author: req.body.author,
          content: cleanContent, // store safe HTML
          categories: req.body.categories?.split(',').map(c => c.trim()) || [],
          tags: req.body.tags?.split(',').map(t => t.trim()) || [],
          imageUrl: result.secure_url,
        });

        await blog.save();
        res.status(200).json(blog);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }
  );

  stream.end(req.file.buffer);
});


// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get blog by slug
router.get("/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update blog (with optional image change)
router.put("/update/:id", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = req.body.imageUrl;

    if (req.file) {
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (err, result) => (err ? reject(err) : resolve(result))
        );
        stream.end(req.file.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        categories: req.body.categories?.split(',').map(c => c.trim()) || [],
        tags: req.body.tags?.split(',').map(t => t.trim()) || [],
        imageUrl
      },
      { new: true }
    );

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete blog
router.delete("/delete/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
