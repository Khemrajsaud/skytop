// import { useEffect, useState } from "react";
// import axios from "axios";

// const Program = () => {
//   const [programs, setPrograms] = useState([]);
  

//   useEffect(() => {
//     const fetchPrograms = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/program");
//         setPrograms(res.data);
//       } catch (err) {
//         console.error("Failed to fetch programs", err);
//       }
//     };

//     fetchPrograms();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Programs</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {programs.map((program) => (
//           <div key={program._id} className="bg-white shadow rounded-lg overflow-hidden">
//             <img
//               src={program.imageUrl}
//               alt={program.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{program.title}</h3>
//               <p className="text-gray-600 text-sm mt-1">{program.description}</p>
//               <div className="text-sm text-gray-500 mt-2">
//                 <p><strong>Date:</strong> {program.date}</p>
//                 <p><strong>Time:</strong> {program.time}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Program;



import { useState, useEffect } from "react";
import axios from "axios";

const Program = () => {
  const [programs, setPrograms] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/program");
        setPrograms(res.data);
      } catch (err) {
        console.error("Failed to fetch programs", err);
      }
    };

    fetchPrograms();
  }, []);

  const toggleShowMore = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-[150px] ">
      <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Programs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program._id} className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src={program.imageUrl}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{program.title}</h3>

              <p className="text-gray-600 text-sm mt-1">
                {expandedIds.includes(program._id)
                  ? program.description
                  : `${program.description.slice(0, 80)}...`}
                {program.description.length > 80 && (
                  <button
                    onClick={() => toggleShowMore(program._id)}
                    className="text-blue-500 ml-2 hover:underline"
                  >
                    {expandedIds.includes(program._id) ? "Show Less" : "Show More"}
                  </button>
                )}
              </p>

              <div className="text-sm text-gray-500 mt-2">
                <p><strong>Date:</strong> {program.date}</p>
                <p><strong>Time:</strong> {program.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;

