
import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";
import authRouth from "./routes/authRoutes.js"

import galleryRoutes from "./routes/galleryRoutes.js";
import programRoutes from "./routes/programRoutes.js"
import blog from "./routes/blog.js";


// Initialize environment variables
dotenv.config();

// App setup
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON body

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, 
 
)
.then(() => console.log("MongoDB connection successful"))
.catch((error) => console.error("MongoDB connection failed:", error));

app.use("/api/auth", authRouth)

app.use("/api/gallery", galleryRoutes);
app.use("/api/program", programRoutes)
app.use("/api/blog",blog )




app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
