import "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-100 text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Skytop Academy</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Blog</li>
              <li>User guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Plans & Pricing</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Personal</li>
              <li>Startup</li>
              <li>Organization</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-center md:text-left">
            &copy; 2024 Skytop, Inc. &bull; Privacy &bull; Terms &bull; Sitemap
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg" />
            <a
              href="https://www.facebook.com/profile.php?id=61558281991316"
              className=""
            >
              <FaFacebookF className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/skytop-academy/posts/?feedView=all"
              className=""
            >
              <FaLinkedinIn className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg" />
            </a>
            <FaYoutube className="text-gray-600 hover:text-red-500 cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;



// import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className=" bg-sky-500 text-gray-700 px-8 py-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
//         {/* Column 1: Logo & Copyright */}
//         <div>
//           <div className="flex items-center gap-2">
//             <div className=" p-1 rounded">
//               <span className="text-blue-600 font-bold text-3xl">SkyTop</span>
//             </div>
//             <h2 className="text-3xl font-bold">Academy</h2>
          
//           </div>
//           <p className=" text-0.80xl text-gray-800 mt-6">© Nepware 2025. All rights reserved.</p>
//           <a href="#" className="text-sm text-blue-400 underline mt-2 inline-block">Privacy Policy</a>
//         </div>

//         {/* Column 2: Links */}
//         <div>
//           <h3 className="font-semibold mb-3 text-gray-900">LINKS</h3>
//           <ul className="space-y-2 text-gray-900">
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Work</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Column 3: Office & Social Media */}
//         <div>
//           <h3 className="font-semibold mb-3 text-gray-900">OFFICE</h3>
//           <p className="text-gray-900 mb-5">Kathmandu, Nepal</p>

//           <h3 className="font-semibold mb-3 text-gray-900">FOLLOW US ON</h3>
//           <div className="flex space-x-4 text-black text-lg">
//             <a href="#"><FaLinkedinIn /></a>
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//           </div>
//         </div>
        
//       </div>
//     </footer>
//   );
// }

