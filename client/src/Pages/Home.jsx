

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import partners0 from "../assets/Image/partners.jpeg"
// import partners1 from "../assets/Image/partners1.jpeg"
// import partners2 from "../assets/Image/partners2.jpeg"


// import HomePage from "./HomePage";


// const Home = () => {

//   const partners = [
//     {
//       partners: partners0
//     },
//     {
//       partners: partners1
//     },
//     {
//       partners: partners2
//     }
//   ]

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 3000,
//     cssEase: "linear"
//   };
//   return (
//     <div className="lg:mt-[60px] mt-[60px] w-full">
     
//       <div className="w-full m-auto ">
     
       
//         {/* <HomePage/> */}
//         <HomePage/>
//         <div className="w-full mt-[50px] m-auto mb-5 ">
//           <h1 className="text-3xl font-bold text-center pb-6">Industrial Partners</h1>
//           <div className="pb-6">
//           <Slider {...settings}>
//             {partners.map((item, index)=>(
//               <div className="flex items-center" key={index}>
//                 <img className="w-[150px]" src={item.partners} alt="" />
//               </div>
//             ))}
//             </Slider>

            
//           </div>
//         </div>
//       </div>

     
 

//     </div>
//   );
// };

// export default Home;






import 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaGlobe, FaBook, FaTrophy} from 'react-icons/fa';

export default function Home() {
  const partners = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
  ];

  const team = [
    { name: 'Dr. Sarah Johnson', role: 'Dean of Academics', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Prof. Michael Smith', role: 'Head of Research', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { name: 'Dr. Emily Carter', role: 'International Programs Director', img: 'https://randomuser.me/api/portraits/women/50.jpg' }
  ];

  const testimonials = [
    { name: 'John Doe', text: 'This university gave me the tools and confidence to succeed in my career.', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
    { name: 'Anna Lee', text: 'The faculty here truly care about students and our future.', img: 'https://randomuser.me/api/portraits/women/68.jpg' }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Minds. Shaping Futures.</h1>
          <p className="max-w-2xl mx-auto mb-6 text-lg md:text-xl">World-class education, research opportunities, and industry connections to help you achieve your dreams.</p>
          <div className="space-x-4">
            <a href="#programs" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">Explore Programs</a>
            <a href="#apply" className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold">Apply Now</a>
          </div>
        </motion.div>
      </section> */}





      <section
  className="relative min-h-[80vh] md:h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Text Content */}
  <motion.div
    className="relative z-10 text-center text-white px-4 max-w-3xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
      Empowering Minds. <br className="hidden sm:block" /> Shaping Futures.
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
      World-class education, research opportunities, and industry connections
      to help you achieve your dreams.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#programs"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-center"
      >
        Explore Programs
      </a>
      <a
        href="#apply"
        className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold text-center"
      >
        Apply Now
      </a>
    </div>
  </motion.div>
</section>


      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[{
            icon: <FaGraduationCap size={40} className="text-blue-600 mx-auto mb-4" />,
            title: '25+ Years of Excellence'
          }, {
            icon: <FaGlobe size={40} className="text-blue-600 mx-auto mb-4" />,
            title: '50,000+ Global Alumni'
          }, {
            icon: <FaBook size={40} className="text-blue-600 mx-auto mb-4" />,
            title: '1200+ Research Publications'
          }, {
            icon: <FaTrophy size={40} className="text-blue-600 mx-auto mb-4" />,
            title: 'Award-Winning Faculty'
          }].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
              {item.icon}
              <p className="text-lg font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      {/* <section id="programs" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Undergraduate Programs", "Postgraduate Studies", "Online Learning"].map((program, i) => (
              <motion.div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
                <img src={`https://images.unsplash.com/photo-${i+1}504?...`} alt={program} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{program}</h3>
                  <p className="text-gray-600">Innovative curriculum and hands-on learning experiences designed for success.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}




      <section id="programs" className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Featured Programs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Undergraduate Programs",
          img: "https://images.unsplash.com/photo-1584697964190-4d92f5f6b2f4?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Postgraduate Studies",
          img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Online Learning",
          img: "https://images.unsplash.com/photo-1584697964403-37d20590c8ab?auto=format&fit=crop&w=800&q=80"
        }
      ].map((program, i) => (
        <motion.div
          key={i}
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={program.img}
            alt={program.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p className="text-gray-600">
              Innovative curriculum and hands-on learning experiences designed for success.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Industry Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((logo, i) => (
              <motion.img key={i} src={logo} alt="partner" className="h-12 grayscale hover:grayscale-0 transition" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden text-center p-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="text-gray-700 italic">&quot;{t.text}&quot;</p>
                  <p className="text-sm font-semibold mt-2">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="apply" className="py-16 bg-blue-600 text-white text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          Ready to Start Your Journey?
        </motion.h2>
        <a href="#" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">Apply Now</a>
      </section>
    </div>
  );
}
