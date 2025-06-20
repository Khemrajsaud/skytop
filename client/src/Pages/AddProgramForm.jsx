import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProgramForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    time: "",
    date: "",
  });
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, time, date } = form;
    if (!file || !title || !description || !time || !date) {
      return alert("All fields including image are required.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("time", time);
    formData.append("date", date);

    try {
      await axios.post("http://localhost:5000/api/program/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // alert("Program added successfully!");
      toast.success("Program added successfully!")
      setForm({ title: "", description: "", time: "", date: "" });
      setFile(null);
    } catch (err) {
      console.error(err)
      // alert(err.response?.data?.message || "Failed to add program");
      toast.success("Program added successfully!")
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow h-screen">
      <h2 className="text-xl font-bold mb-4">Add Program</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Time (e.g., 10:00 AM)"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Program
        </button>
      </form>
    </div>
  );
};

export default AddProgramForm;
