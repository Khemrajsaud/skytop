// import  "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-16 px-[10%]">
//       <div className="grid md:grid-cols-4 gap-10">
//         {/* Brand Info */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">TechVision</h3>
//           <p className="text-sm text-gray-400 mb-4">
//             Building modern, scalable digital solutions for startups & enterprises.
//           </p>
//           <div className="flex gap-3 mt-4">
//             <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
//             <FaTwitter className="hover:text-blue-400 cursor-pointer" />
//             <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
//             <FaInstagram className="hover:text-blue-400 cursor-pointer" />
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Navigation</h4>
//           <ul className="text-gray-400 text-sm space-y-2">
//             <li className="hover:text-white cursor-pointer">Home</li>
//             <li className="hover:text-white cursor-pointer">About Us</li>
//             <li className="hover:text-white cursor-pointer">Services</li>
//             <li className="hover:text-white cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Our Services</h4>
//           <ul className="text-gray-400 text-sm space-y-2">
//             <li className="hover:text-white cursor-pointer">Web Development</li>
//             <li className="hover:text-white cursor-pointer">Mobile Apps</li>
//             <li className="hover:text-white cursor-pointer">UI/UX Design</li>
//             <li className="hover:text-white cursor-pointer">Cloud Solutions</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
//           <p className="text-gray-400 text-sm">
//             Kathmandu, Nepal <br />
//             +977-9800000000 <br />
//             info@techvision.com
//           </p>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} TechVision. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import  "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Our University</h3>
          <p className="text-sm leading-relaxed">
            We are committed to providing world-class education, cutting-edge research, 
            and an inclusive environment for students across the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/programs" className="hover:text-white">Programs</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Academic Street</li>
            <li>Knowledge City, Education State</li>
            <li>Email: info@university.com</li>
            <li>Phone: +1 234 567 890</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4 text-center text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Your University Name. All Rights Reserved.
      </div>
    </footer>
  );
}

