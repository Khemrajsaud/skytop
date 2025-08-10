import { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";  // Import ReactQuill
import "react-quill/dist/quill.snow.css"; // ReactQuill styles
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

const BlogCategory = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", imageUrl: "" });
  const [expandedId, setExpandedId] = useState(null);

  // Helper to strip HTML tags from description for preview
  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // Fetch blogs (latest first)
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog");
      setBlogs(res.data.reverse());
    } catch (err) {
      toast.error("Failed to fetch blogs");
      console.error("Failed to fetch blogs:", err);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5000/api/blog/delete/${id}`);
        toast.success("Blog deleted successfully");
        fetchBlogs();
      } catch (err) {
        toast.error("Failed to delete blog");
        console.error("Failed to delete blog:", err);
      }
    }
  };

  // Start edit
  const handleEdit = (blog) => {
    setEditId(blog._id);
    setForm({
      title: blog.title || "",
      description: blog.description || "",
      imageUrl: blog.imageUrl || "",
    });
  };

  // Save edited blog
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/blog/update/${editId}`, form);
      toast.success("Blog updated successfully");
      setEditId(null);
      setForm({ title: "", description: "", imageUrl: "" });
      fetchBlogs();
    } catch (err) {
      toast.error("Failed to update blog");
      console.error("Failed to update blog:", err);
    }
  };

  // Expand / collapse description
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-xl font-bold mb-4">Manage Blogs</h2>

      {blogs.map((b) => (
        <div key={b._id} className="border p-4 mb-4 rounded shadow">
          {editId === b._id ? (
            <>
              <input
                className="border p-2 w-full"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Blog Title"
              />
              {/* ReactQuill editor for description */}
              <ReactQuill
                theme="snow"
                value={form.description}
                onChange={(content) => setForm({ ...form, description: content })}
                className="mt-2"
                placeholder="Blog Description"
              />
              <input
                className="border p-2 w-full mt-2"
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                placeholder="Image URL (optional)"
              />
              <div className="flex space-x-2 mt-3">
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              {b.imageUrl && (
                <img
                  src={b.imageUrl}
                  className="w-full h-48 object-cover rounded"
                  alt={b.title}
                />
              )}
              <h3 className="text-lg font-bold mt-2">{b.title}</h3>

              {/* Display blog created time if available */}
              {b.createdAt && (
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(b.createdAt).toLocaleString()}
                </p>
              )}

              {/* Render description */}
              <div
                className="mt-1"
                dangerouslySetInnerHTML={{
                  __html:
                    expandedId === b._id
                      ? b.description
                      : stripHtml(b.description).length > 100
                      ? stripHtml(b.description).slice(0, 100) + "..."
                      : b.description || "",
                }}
              />
              {b.description && stripHtml(b.description).length > 100 && (
                <button
                  onClick={() => toggleExpand(b._id)}
                  className="text-blue-600 hover:underline mt-1 block"
                >
                  {expandedId === b._id ? "Show Less" : "Show More"}
                </button>
              )}
              <div className="flex space-x-3 mt-3">
                <button
                  onClick={() => handleEdit(b)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(b._id)}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogCategory;
