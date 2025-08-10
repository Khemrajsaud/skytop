import "react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import loginimg from "../assets/Image/contactUs.png";


const Contact = () => {
  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-[150px] ">
      {/* Image Section */}
      <div className="lg:flex lg:items-center gap-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          className="lg:w-[400px] w-[200px] pt-6 lg: p-1 md:w-[400px]"
          src={loginimg}
          alt="Contact Us"
        />
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" shadow-lg rounded-xl p-8 mt-6 w-full max-w-md"
      >
        
        <form  className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
            className=" outline-none border border-blue-600 p-3 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
               name="user_email"
               required
            className=" outline-none border  border-blue-600 p-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Enter Your Address"
               name="user_address"
               required
            className="outline-none border  border-blue-600 p-3 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Enter Your Number"
               name="user_number"
              required
            className="outline-none border  border-blue-600 p-3 rounded-md w-full"
          />
          <textarea
            placeholder="Your Message"
               name="user_message"
               required
            className="outline-none border  border-blue-600 p-3 rounded-md w-full h-24"
          ></textarea>
          <button
            type="submit"
               name="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
         
        </form>
      </motion.div>
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 text-center"
      >
        <h3 className="text-lg font-semibold text-gray-700">Get in Touch</h3>
        <div className="mt-3 space-y-2">
          <p className="flex items-center justify-center gap-2 text-gray-600">
            <FaPhone /> 9865616815
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-600">
            <FaWhatsapp /> 9865616815
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-600">
            <FaEnvelope /> contact@example.com
          </p>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-6 w-full "
      >
     
      </motion.div>
        
    </div>
     <iframe
          className="w-full h-64 border "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.844843911077!2d85.34905473495017!3d27.722076423694226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19aa10ff78b1%3A0xac4fa0520b8a2829!2sChuchepati%2CChabahil!5e0!3m2!1sen!2snp!4v1741189251694!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

    </div>
  );
};

export default Contact;


