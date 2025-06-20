import { motion } from "framer-motion";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
// import about from "../assets/Image/about.png"

import aboutpage from "../assets/Image/aboutpage.png";
// import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  {
    title: "Deliver Quality Education",
    description:
      "Provide academically rigorous and professionally relevant programs tailored to meet evolving global standards.",
  },
  {
    title: "Enhance Career Readiness",
    description:
      "Equip students with industry-specific skills and practical knowledge to ensure employability and career advancement.",
  },
  {
    title: "Foster Innovation & Leadership",
    description:
      "Cultivate creativity, critical thinking, and leadership abilities through dynamic learning approaches.",
  },
  {
    title: "Promote Lifelong Learning",
    description:
      "Encourage continuous personal and professional development through accessible and flexible education.",
  },
];

const About = () => {
  return (
    <div className="mt-[100px]">
    <div className=" py-16 px-6 md:px-16 ">
      

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={aboutpage} alt="About" className="rounded-xl shadow-lg" />
        </motion.div>
        <motion.p
          className="text-gray-700 text-lg lg:text-justify"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          We are pleased to introduce Skytop Academy, a premier educational
          institution founded in 2024, located in Chabahil Chuchepati,
          Kathmandu, Nepal. Our mission, encapsulated in our motto,
          &quot;Optimize Your Horizon,&quot; reflects our dedication to
          fostering a learning environment that drives growth, excellence, and
          success.We aim to empower students with the skills and confidence to thrive in a rapidly changing world. At Skytop Academy, innovation and integrity are at the heart of everything we do. Our passionate faculty, modern facilities, and student-centered approach ensure a well-rounded educational experience. Join us as we shape the future, one learner at a time.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      {/* <div className="mt-16 text-center">
        <motion.h3
          className="text-4xl font-bold text-gray-900 py-4 px-8    transition-all duration-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission & Vision
        </motion.h3>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <motion.div
          className="rounded-md shadow-lg p-6 bg-white hover:bg-sky-500 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-2xl font-bold">Our Mission</h1>
          <p className="text-balance pt-4">
            Skytop Academy is dedicated to delivering high-quality,
            industry-relevant education through innovative teaching
            methodologies, personalized learning, and state-of-the-art
            resources.
          </p>
        </motion.div>

        <motion.div
          className="rounded-md shadow-lg p-6 bg-white hover:bg-sky-500 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-2xl font-bold">Our Vision</h1>
          <p className="text-balance pt-4">
            To be a leading educational institution that empowers individuals
            with knowledge, skills, and innovation, enabling them to excel in an
            ever-evolving world.
          </p>
        </motion.div>
      </div>

      {/* Strengths Section */}
      <div className="flex justify-center mt-16">
        <motion.h1
          className="lg:text-4xl text-3xl font-bold text-gray-900 py-4 px-8  transition-all duration-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Strengths
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mt-8">
        {[
          {
            icon: (
              <FaChalkboardTeacher className="text-blue-600 text-4xl mx-auto" />
            ),
            title: "Expert Faculty",
          },
          {
            icon: <FaLaptopCode className="text-green-600 text-4xl mx-auto" />,
            title: "Modern Learning",
          },
          {
            icon: <FaUsers className="text-orange-600 text-4xl mx-auto" />,
            title: "Career Readiness",
          },
          {
            icon: (
              <MdOutlineSchool className="text-purple-600 text-4xl mx-auto" />
            ),
            title: "Lifelong Learning",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h4 className="font-semibold mt-2">{item.title}</h4>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Objectives
        </motion.h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="p-6 shadow-lg rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {obj.title}
                  </h2>
                  <p className="mt-2 text-gray-600 text-sm">
                    {obj.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
