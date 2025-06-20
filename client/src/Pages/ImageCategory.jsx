import { useEffect, useState } from "react";
import axios from "axios";

const ImageCategory = () => {
  const [images, setImages] = useState([]);
  const [editTitles, setEditTitles] = useState({});
  const [editingIds, setEditingIds] = useState({}); // To track which image is in edit mode

  // Fetch all images
  const fetchImages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/gallery");
      setImages(res.data);
    } catch (err) {
      console.error("Failed to fetch images:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Delete image by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`);
      fetchImages();
    } catch (err) {
      console.error("Failed to delete image:", err);
    }
  };

  // Save edited title
  const handleSave = async (id) => {
    const newTitle = editTitles[id];
    if (!newTitle?.trim()) return;

    try {
      await axios.put(`http://localhost:5000/api/gallery/${id}`, {
        title: newTitle.trim(),
      });
      setEditingIds((prev) => ({ ...prev, [id]: false }));
      fetchImages();
    } catch (err) {
      console.error("Failed to save title:", err);
    }
  };

  // Toggle edit mode for a specific image
  const toggleEdit = (id, currentTitle) => {
    if (!editingIds[id]) {
      // Enable edit mode
      setEditTitles((prev) => ({ ...prev, [id]: currentTitle || "" }));
      setEditingIds((prev) => ({ ...prev, [id]: true }));
    } else {
      // Save on second click
      handleSave(id);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Image Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img._id} className="border rounded-lg shadow p-4">
            <img
              src={img.imageUrl}
              alt="Gallery"
              className="w-full h-48 object-cover rounded"
            />

            {/* Title (edit mode or static view) */}
            {!editingIds[img._id] ? (
              <h3 className="mt-3 font-semibold">{img.title || "No title"}</h3>
            ) : (
              <input
                type="text"
                className="border px-2 py-1 mt-3 w-full rounded"
                value={editTitles[img._id] || ""}
                onChange={(e) =>
                  setEditTitles({ ...editTitles, [img._id]: e.target.value })
                }
              />
            )}

            {/* Action buttons */}
            <div className="flex space-x-2 mt-3">
              <button
                onClick={() => toggleEdit(img._id, img.title)}
                className={`${
                  editingIds[img._id]
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-yellow-500 hover:bg-yellow-600"
                } text-white px-4 py-1 rounded`}
              >
                {editingIds[img._id] ? "Save" : "Edit"}
              </button>

              <button
                onClick={() => handleDelete(img._id)}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCategory;
