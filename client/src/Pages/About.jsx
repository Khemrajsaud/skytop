// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; // Corrected: Using Link from react-router-dom
// import {
//   BookOpen,
//   Lightbulb,
//   Users,
//   GraduationCap,
//   Award,
//   Compass,
// } from "lucide-react"; // Using lucide-react for modern icons

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const About = () => {
//   return (
//     <div className="mt-[100px] bg-gray-50 min-h-screen">
//       {/* Hero Section - Our Story */}
//       <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-4xl md:text-5xl font-extrabold mb-4"
//           >
//             About Skytop Academy
//           </motion.h1>
//           <motion.p
//             variants={itemVariants}
//             className="text-lg md:text-xl max-w-3xl mx-auto"
//           >
//             Empowering the next generation of leaders and innovators through
//             exceptional academic programs and a nurturing learning environment.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* Introduction - Our Journey */}
//       <section className="py-16 px-6 md:px-16">
//         <motion.div
//           className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           <motion.div variants={itemVariants}>
//             {/* Using a placeholder image. Replace with your actual logo path */}
//             <img
//               src="/placeholder.svg?height=400&width=600"
//               alt="Students learning"
//               className="rounded-xl shadow-lg w-full h-auto object-cover"
//             />
//           </motion.div>
//           <motion.div variants={itemVariants}>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Our Journey to Excellence
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Founded with a vision to redefine academic excellence, Skytop
//               Academy is committed to providing a transformative educational
//               experience. We believe in fostering not just knowledge, but also
//               critical thinking, creativity, and a lifelong passion for
//               learning. Our journey began with a simple goal: to create a space
//               where every student can reach their full potential and &quot;Optimize
//               Their Horizon.&quot;
//             </p>
//             <p className="text-gray-700 text-lg leading-relaxed mt-4">
//               We are dedicated to nurturing well-rounded individuals prepared to
//               tackle the challenges of a rapidly evolving world. Our innovative
//               curriculum, expert faculty, and student-centric approach are the
//               pillars of our success.
//             </p>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-16 px-6 md:px-16 bg-blue-50">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
//           >
//             Our Guiding Principles
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
//             >
//               <div className="text-sky-600 mb-4">
//                 <BookOpen className="h-12 w-12 mx-auto" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Our Mission
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 To provide a dynamic and comprehensive academic environment that
//                 inspires intellectual curiosity, fosters critical thinking, and
//                 equips students with the skills necessary for lifelong success
//                 and meaningful contributions to society.
//               </p>
//             </motion.div>
//             <motion.div
//               variants={itemVariants}
//               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
//             >
//               <div className="text-sky-600 mb-4">
//                 <Lightbulb className="h-12 w-12 mx-auto" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Our Vision
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 To be recognized as a premier academy, cultivating a community
//                 of innovative thinkers, ethical leaders, and compassionate
//                 global citizens who are prepared to excel in an ever-changing
//                 world.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* What We Offer Section */}
//       <section className="py-16 px-6 md:px-16">
//         <motion.div
//           className="max-w-6xl mx-auto text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
//           >
//             What Makes Us Unique
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Users className="h-10 w-10 text-sky-600" />,
//                 title: "Expert Faculty",
//                 description:
//                   "Learn from passionate educators and industry professionals dedicated to your growth.",
//               },
//               {
//                 icon: <GraduationCap className="h-10 w-10 text-sky-600" />,
//                 title: "Innovative Curriculum",
//                 description:
//                   "Engage with cutting-edge programs designed for real-world relevance and future success.",
//               },
//               {
//                 icon: <Award className="h-10 w-10 text-sky-600" />,
//                 title: "Personalized Learning",
//                 description:
//                   "Benefit from tailored support and small class sizes for individualized attention.",
//               },
//               {
//                 icon: <Compass className="h-10 w-10 text-sky-600" />,
//                 title: "Career Pathways",
//                 description:
//                   "Gain practical skills and guidance to navigate your career journey effectively.",
//               },
//               {
//                 icon: <BookOpen className="h-10 w-10 text-sky-600" />,
//                 title: "Modern Facilities",
//                 description:
//                   "Study in a conducive environment with state-of-the-art technology and resources.",
//               },
//               {
//                 icon: <Lightbulb className="h-10 w-10 text-sky-600" />,
//                 title: "Holistic Development",
//                 description:
//                   "Beyond academics, we foster creativity, leadership, and ethical values.",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border border-gray-100"
//               >
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 px-6 md:px-16 bg-sky-700 text-white text-center">
//         <motion.div
//           className="max-w-4xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={containerVariants}
//         >
//           <motion.h2
//             variants={itemVariants}
//             className="text-3xl md:text-4xl font-bold mb-6"
//           >
//             Ready to Optimize Your Horizon?
//           </motion.h2>
//           <motion.p variants={itemVariants} className="text-lg mb-8">
//             Join Skytop Academy and embark on a journey of academic excellence
//             and personal growth.
//           </motion.p>
//           <motion.div variants={itemVariants}>
//             <Link
//               to="/contact"
//               className="inline-block bg-white text-sky-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
//             >
//               Contact Us Today
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default About;



import  "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiUsers, FiAward } from "react-icons/fi";

// Modern About Page for an academic-related website
// Replace content/images later as needed

const stats = [
  { label: "Years of Excellence", value: "25+" },
  { label: "Alumni Worldwide", value: "50K+" },
  { label: "Research Publications", value: "1,200+" },
];

const values = [
  {
    icon: <FiBookOpen className="text-3xl text-indigo-600" />,
    title: "Academic Excellence",
    text: "Committed to high-quality teaching, curriculum innovation, and rigorous academic standards.",
  },
  {
    icon: <FiUsers className="text-3xl text-indigo-600" />,
    title: "Community Engagement",
    text: "Building partnerships that benefit students, faculty, and society at large.",
  },
  {
    icon: <FiAward className="text-3xl text-indigo-600" />,
    title: "Recognition & Impact",
    text: "National and international awards that highlight our commitment to excellence.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <div className=" mt-20 min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <header className="relative bg-gradient-to-br from-indigo-700 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            About Our Institution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100/90"
          >
            We are a hub of learning, research, and innovation — shaping future leaders through
            transformative education and impactful research.
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To foster academic excellence, critical thinking, and innovative research that address
              real-world challenges and empower individuals to make meaningful contributions to
              society.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a globally recognized center of learning and innovation, inspiring positive change
              and shaping the leaders of tomorrow.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
            >
              <div className="text-3xl font-extrabold text-indigo-700">{stat.value}</div>
              <div className="mt-2 text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <motion.h2
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white rounded-lg shadow-md p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeUp}
              >
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=60"
              alt="Campus History"
              className="rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed">
              Established in 1998, our institution began with a vision to transform education in the
              region. Over the years, we have expanded our programs, built world-class facilities,
              and established strong research networks — both nationally and internationally.
            </p>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Discover More About Us
          </motion.h2>
          <p className="mb-6 text-indigo-100/90 max-w-xl mx-auto">
            Learn about our programs, faculty, and opportunities for students from around the world.
          </p>
          <a
            href="/contact"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
}
