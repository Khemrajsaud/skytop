


import { useState } from "react";
import axios from "axios";

const AddGalleryForm = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      await axios.post("http://localhost:5000/api/gallery/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Image uploaded to gallery!");
      setImageFile(null);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to upload image");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow h-screen">
      <h2 className="text-xl font-bold mb-4">Add to Gallery</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default AddGalleryForm;



