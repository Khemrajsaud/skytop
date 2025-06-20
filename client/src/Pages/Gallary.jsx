import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get("https://skytop.onrender.com/api/gallery/");
        setImages(res.data);
      } catch (err) {
        console.error("Error loading gallery images:", err);
      }
    };

    fetchGallery();
  }, []);

  return (
    // <div className="p-8  mt-[100px] mx-[100px]">
    //   <h2 className="text-2xl font-bold mb-6">Gallery</h2>
    //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
    //     {images.map((img) => (
    //       <div key={img._id} className=" overflow-hidden  space rounded-md ">
    //         <img src={img.imageUrl} alt="gallery" className="w-full h-[200px]  object-cover rounded-md " />
    //         <h1 className="text-sm text-center w-full border-b p-2 ">{img.title}</h1>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="p-4 mt-24 mx-4 md:mx-24 lg:mx-32">
  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((img) => (
      <div key={img._id} className="overflow-hidden rounded-md">
        <img
          src={img.imageUrl}
          alt={img.title || "gallery"}
          className="w-full h-[200px] object-cover rounded-md"
        />
        <h1 className="text-sm text-center border-b p-2">{img.title}</h1>
      </div>
    ))}
  </div>
</div>
  );
};

export default Gallery;
