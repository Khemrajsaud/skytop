// import { useState } from "react";

// import AddProgramForm from "./AddProgramForm";
// import UploadToCloudinary from "./UploadToCloudinary";
// import ImageCategory from "./ImageCategory";
// import ProgramCategory from "./ProgramCategory";

// const AdminPanel = () => {
//   const [activeSection, setActiveSection] = useState(""); // Track active section

//   const adminData = [
//     // { title: "Adminal Panel", content: "Admin Panel" },

  
//     { title: "Add Program", content: <AddProgramForm /> },
//     { title: "upload image", content: <UploadToCloudinary /> },
//     { title: "Image Category", content: <ImageCategory /> },
//     { title: "Program Category", content: <ProgramCategory /> },
//   ];

//   return (
//     <div className="flex  ">
//       {/* Sidebar */}
//       <div className="w-[220px] bg-gray-500 text-white flex flex-col items-start  p-4">
//         {adminData.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveSection(item.title)}
//             className={`px-4 py-2 mb-2 hover:bg-gray-600 rounded  ${
//               activeSection === item.title ? "bg-gray-600" : ""
//             }`}
//           >
//             {item.title}
//           </button>
//         ))}
//       </div>

//       {/* Main Content Area */}

//       <div className="flex-1 bg-white p-6 mt-6 w-full">
      
//         {activeSection === "Add Program" && <AddProgramForm />}
//         {activeSection === "upload image" && <UploadToCloudinary />}
//         {activeSection === "Image Category" && <ImageCategory />}
//         {activeSection === "Program Category" && <ProgramCategory />}
//         {activeSection === "" && (
//           <div className="text-gray-500 h-screen">Select a section from the sidebar</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProgramForm from "./AddProgramForm";
import UploadToCloudinary from "./UploadToCloudinary";
import ImageCategory from "./ImageCategory";
import ProgramCategory from "./ProgramCategory";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const navigate = useNavigate();

  const adminData = [
    { title: "Add Program", content: <AddProgramForm /> },
    { title: "Upload Image", content: <UploadToCloudinary /> },
    { title: "Image Category", content: <ImageCategory /> },
    { title: "Program Category", content: <ProgramCategory /> },
  ];

  // ✅ Decode JWT on mount to get admin email
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAdminEmail(decoded.email);
      } catch (err) {
        console.error("Invalid token", err);
        toast.error("Session expired");
        navigate("/admin-login");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast.success("Logged out");
    navigate("/admin-login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[220px] bg-gray-700 text-white flex flex-col items-start p-4">
        <div className="mb-6">
          
          <p className="text-sm text-gray-300 text-center border-b ">Logged in: </p>
          <p className="font-semibold">{adminEmail}</p>
        </div>

        {adminData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(item.title)}
            className={`px-4 py-2 mb-2 hover:bg-gray-600 rounded ${
              activeSection === item.title ? "bg-gray-600" : ""
            }`}
          >
            {item.title}
          </button>
        ))}

        <button
          onClick={handleLogout}
          className="mt-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white w-full rounded"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white p-6 overflow-y-auto">
        {activeSection === "" && (
          <div className="text-gray-500">Select a section from the sidebar</div>
        )}
        {adminData.map(
          (item) =>
            activeSection === item.title && (
              <div key={item.title}>{item.content}</div>
            )
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

