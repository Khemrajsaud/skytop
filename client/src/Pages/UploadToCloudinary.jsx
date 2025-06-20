import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UploadToCloudinary = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return alert("Select a file and enter a title");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(
        "http://localhost:5000/api/gallery/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // alert("Uploaded!");
      toast.success("Upload Successfully!")
      setFile(null);
      setTitle("");
    } catch (err) {
      console.error(err);
      // alert("Upload failed");

      toast.success("Upload failed")
    }
  };

  return (
    <div className="h-screen   ">
      <form onSubmit={handleUpload} className=" space-y-4">
        <div>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <div>
          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="ml-4 p-2 text-sm border rounded w-full"
          />
        </div>
        <button className="w-full bg-green-500 py-1" type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadToCloudinary;
