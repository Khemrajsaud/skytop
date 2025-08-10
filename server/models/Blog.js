// import mongoose from 'mongoose';

// const BlogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, unique: true },
//   content: { type: String, required: true },
//   imageUrl: { type: String },
//   tags: [String],
//   createdAt: { type: Date, default: Date.now }
// });

// const Blog = mongoose.model("Blog", BlogSchema);
// export default Blog;




import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  author: { type: String },
  content: { type: String, required: true },
  imageUrl: { type: String },
  categories: [String],
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
