import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTitle: { type: String },
  description: { type: String, required: true },
  category: { type: String },
  image: String,
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
