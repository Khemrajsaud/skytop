// import { useEffect, useState } from "react";
// import axios from "axios";

// const ProgramCategory = () => {
//   const [programs, setPrograms] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [form, setForm] = useState({ title: "", description: "", date: "", time: "" });
//   const [expandedId, setExpandedId] = useState(null);

//   const fetchPrograms = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/program");
//       setPrograms(res.data);
//     } catch (err) {
//       console.error("Failed to fetch programs:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this program?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/program/${id}`);
//         fetchPrograms();
//       } catch (err) {
//         console.error("Failed to delete program:", err);
//       }
//     }
//   };

//   const handleEdit = (program) => {
//     setEditId(program._id);
//     setForm({
//       title: program.title,
//       description: program.description,
//       date: program.date,
//       time: program.time,
//     });
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:5000/api/program/${editId}`, form);
//       setEditId(null);
//       setForm({ title: "", description: "", date: "", time: "" });
//       fetchPrograms();
//     } catch (err) {
//       console.error("Failed to update program:", err);
//     }
//   };

//   const toggleExpand = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-xl font-bold mb-4">Manage Programs</h2>
//       {programs.map((p) => (
//         <div key={p._id} className="border p-4 mb-4 rounded shadow">
//           {editId === p._id ? (
//             <>
//               <input
//                 className="border p-2 w-full"
//                 value={form.title}
//                 onChange={(e) => setForm({ ...form, title: e.target.value })}
//                 placeholder="Program Title"
//               />
//               <textarea
//                 className="border p-2 w-full mt-2"
//                 rows="4"
//                 value={form.description}
//                 onChange={(e) => setForm({ ...form, description: e.target.value })}
//                 placeholder="Program Description"
//               />
//               <input
//                 type="date"
//                 className="border p-2 w-full mt-2"
//                 value={form.date}
//                 onChange={(e) => setForm({ ...form, date: e.target.value })}
//               />
//               <input
//                 className="border p-2 w-full mt-2"
//                 value={form.time}
//                 onChange={(e) => setForm({ ...form, time: e.target.value })}
//                 placeholder="Time (e.g. 10:00 AM)"
//               />
//               <div className="flex space-x-2 mt-3">
//                 <button
//                   onClick={handleUpdate}
//                   className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditId(null)}
//                   className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <img src={p.imageUrl} className="w-full h-48 object-cover rounded" alt={p.title} />
//               <h3 className="text-lg font-bold mt-2">{p.title}</h3>
//               <p className="mt-1">
//                 {expandedId === p._id
//                   ? p.description
//                   : p.description.length > 100
//                   ? `${p.description.slice(0, 100)}...`
//                   : p.description}
//               </p>
//               {p.description.length > 100 && (
//                 <button
//                   onClick={() => toggleExpand(p._id)}
//                   className="text-blue-600 hover:underline mt-1 block"
//                 >
//                   {expandedId === p._id ? "Show Less" : "Show More"}
//                 </button>
//               )}
//               <p className="mt-2">
//                 <strong>Date:</strong> {p.date}
//               </p>
//               <p>
//                 <strong>Time:</strong> {p.time}
//               </p>
//               <div className="flex space-x-3 mt-3">
//                 <button
//                   onClick={() => handleEdit(p)}
//                   className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(p._id)}
//                   className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };



import { useEffect, useState } from "react";
import axios from "axios";

const ProgramCategory = () => {
  const [programs, setPrograms] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", date: "", time: "" });
  const [expandedId, setExpandedId] = useState(null);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/program");
      setPrograms(res.data);
    } catch (err) {
      console.error("Failed to fetch programs:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      try {
        await axios.delete(`http://localhost:5000/api/program/${id}`);
        fetchPrograms();
      } catch (err) {
        console.error("Failed to delete program:", err);
      }
    }
  };

  const handleEdit = (program) => {
    setEditId(program._id);
    setForm({
      title: program.title,
      description: program.description,
      date: program.date,
      time: program.time,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/program/${editId}`, form);
      setEditId(null);
      setForm({ title: "", description: "", date: "", time: "" });
      fetchPrograms();
    } catch (err) {
      console.error("Failed to update program:", err);
    }
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Manage Programs</h2>
      {programs.map((p) => (
        <div key={p._id} className="border p-4 mb-4 rounded shadow">
          {editId === p._id ? (
            <>
              <input
                className="border p-2 w-full"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Program Title"
              />
              <textarea
                className="border p-2 w-full mt-2"
                rows="4"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Program Description"
              />
              <input
                type="date"
                className="border p-2 w-full mt-2"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
              <input
                className="border p-2 w-full mt-2"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                placeholder="Time (e.g. 10:00 AM)"
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
              <img src={p.imageUrl} className="w-full h-48 object-cover rounded" alt={p.title} />
              <h3 className="text-lg font-bold mt-2">{p.title}</h3>
              <p className="mt-1">
                {expandedId === p._id
                  ? p.description
                  : p.description.length > 100
                  ? `${p.description.slice(0, 100)}...`
                  : p.description}
              </p>
              {p.description.length > 100 && (
                <button
                  onClick={() => toggleExpand(p._id)}
                  className="text-blue-600 hover:underline mt-1 block"
                >
                  {expandedId === p._id ? "Show Less" : "Show More"}
                </button>
              )}
              <p className="mt-2">
                <strong>Date:</strong> {p.date}
              </p>
              <p>
                <strong>Time:</strong> {p.time}
              </p>
              <div className="flex space-x-3 mt-3">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
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

export default ProgramCategory;

