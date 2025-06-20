import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    imageUrl: { type: String, required: true },
    public_id: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Program", programSchema);
