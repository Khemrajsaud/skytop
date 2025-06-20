// import "react";
// import Navbar from "./Components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home";
// import Signup from "./Pages/Signup";

// import Contact from "./Pages/Contact";
// import Footer from "./Components/Footer";
// import About from "./Pages/About";
// import Program from "./Pages/Program";
// import Gallary from "./Pages/Gallary";
// import Teams from "./Pages/Teams";
// import Blogs from "./Pages/Blogs";
// import AdminPanel from "./Pages/AdminPanel";

// const App = () => {
//   return (
//     <div className="">
//       <Navbar />
        

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/gallery" element={<Gallary />} />

//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/programs" element={<Program />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/teams" element={<Teams />} />

      
//         <Route path="/admin" element={<AdminPanel />}></Route>
//       </Routes>
//       <Footer />
      
//     </div>
//   );
// };

// export default App;



import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Gallary from "./Pages/Gallary";
import Contact from "./Pages/Contact";
import Teams from "./Pages/Teams";
import Program from "./Pages/Program";
import AdminLogin from "./Pages/AdminLogin";
import AdminPanel from "./Pages/AdminPanel";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useLocation } from "react-router-dom";

const App = () => {
   const location = useLocation();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        } />
      </Routes>
     {location.pathname !== "/admin" && <Footer />}
    </div>
  );
};

export default App;

