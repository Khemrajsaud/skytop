import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading blogs...</p>;

  return (
    <div
      className="max-w-4xl mx-auto p-4 
    "
    >
      <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="border rounded-lg p-4 mb-6 shadow">
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />
          )}
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p className="text-sm text-gray-500 mb-1">
            By {blog.author || "Unknown"} •{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          {/* Full HTML content */}
          <div
            className="mt-2 text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>

          {blog.categories?.length > 0 && (
            <div className="mt-2 text-sm text-blue-600">
              Categories: {blog.categories.join(", ")}
            </div>
          )}
          {blog.tags?.length > 0 && (
            <div className="text-sm text-green-600">
              Tags: {blog.tags.join(", ")}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blog;
