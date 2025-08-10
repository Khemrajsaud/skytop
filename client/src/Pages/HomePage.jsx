



import  "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import home from "../assets/Image/home.png"

const HomePage = () => {
  return (
    <div className="pt-10 font-sans">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between px-[10%]">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Empower Your Ideas with{" "}
            <span className="text-blue-600">SkyTop Academy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We help businesses launch, scale, and thrive in a fast-changing world using top-notch software and design.
          </p>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get Started <FaArrowRight />
          </button>
        </div>
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={home}
            alt="Startup Illustration"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 px-[10%] text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          TechVision is a passionate team of creators, engineers, and marketers. We specialize in building digital products that solve real-world problems. Whether it&apos;s a mobile app or a full-fledged web platform, we deliver innovation with purpose.
        </p>
      </section>

      {/* Services / Features Section */}
      <section className="py-20 px-[10%] bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Web Development", desc: "Responsive, fast, and scalable web apps tailored to your brand." },
            { title: "Mobile Applications", desc: "Android & iOS apps that are beautiful and functional." },
            { title: "UI/UX Design", desc: "Stunning user interfaces & intuitive user experiences." },
            { title: "Brand Strategy", desc: "We help position your brand to connect with your audience." },
            { title: "Cloud Solutions", desc: "Secure and scalable cloud-based app hosting & infrastructure." },
            { title: "Digital Marketing", desc: "SEO, SMM & content strategies that drive growth." },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100 px-[10%]">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Experienced development team",
            "Client-first approach",
            "Proven track record of success",
            "Latest technologies and tools",
            "Transparent process & communication",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-4">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-[10%]">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "1. Discovery", desc: "We learn about your goals and vision." },
            { title: "2. Design & Develop", desc: "We design and build your product." },
            { title: "3. Launch & Scale", desc: "We deploy, monitor, and help you grow." },
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 px-[10%]">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow border hover:shadow-xl transition"
            >
              <p className="italic text-gray-600 mb-4">
                &quot;Amazing service and attention to detail. They helped us bring our vision to life!&quot;
              </p>
              <h4 className="font-semibold text-gray-800">Client {i}</h4>
              <p className="text-sm text-gray-500">CEO, Company {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logos / Partners */}
      <section className="py-16 px-[10%] bg-white text-center">
        <h2 className="text-2xl font-bold mb-8">Trusted by Teams Worldwide</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
          <img src="/logo1.png" className="h-10" alt="Client Logo" />
          <img src="/logo2.png" className="h-10" alt="Client Logo" />
          <img src="/logo3.png" className="h-10" alt="Client Logo" />
          <img src="/logo4.png" className="h-10" alt="Client Logo" />
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-blue-600 text-white text-center px-[10%]">
        <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
        <p className="mb-6 text-lg">
          Get in touch with us today. Let’s turn your ideas into reality.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      {/* Optional: Blog / Articles Preview */}
      <section className="py-20 px-[10%] bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <img src={`/blog${i}.jpg`} alt="Blog" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blog Title {i}</h3>
              <p className="text-gray-600 text-sm">
                Learn how startups scale fast using tech and design. Explore our latest strategies and insights.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
