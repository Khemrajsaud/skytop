import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/gallery/");
        setImages(res.data);
      } catch (err) {
        console.error("Error loading gallery images:", err);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="p-8  mt-[100px] mx-[100px]">
      <h2 className="text-2xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
        {images.map((img) => (
          <div key={img._id} className=" overflow-hidden  space rounded-md ">
            <img src={img.imageUrl} alt="gallery" className="w-full h-[200px]  object-cover rounded-md " />
            <h1 className="text-sm text-center w-full border-b p-2 ">{img.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
