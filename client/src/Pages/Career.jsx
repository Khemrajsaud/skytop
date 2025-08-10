import  "react";
import { motion } from "framer-motion";
import { FiMail, FiClock, FiUsers } from "react-icons/fi";

// Modern Careers Page (React + Tailwind + Framer Motion)
// Default export a single component that can be used in App.jsx
// Instructions: ensure Tailwind CSS and framer-motion are installed in your project.

const openings = [
  {
    id: 1,
    title: "Assistant Professor - Computer Science",
    type: "Full-time",
    deadline: "Aug 31, 2025",
    description:
      "Teach undergraduate and graduate courses, supervise projects, and contribute to research in AI and Systems.",
  },
  {
    id: 2,
    title: "Research Assistant - Data Science Lab",
    type: "Part-time",
    deadline: "Sep 10, 2025",
    description: "Support faculty research, run experiments, and help publish results.",
  },
  {
    id: 3,
    title: "Admissions & Outreach Officer",
    type: "Full-time",
    deadline: "Sep 05, 2025",
    description: "Coordinate admissions activities, campus visits and outreach programs.",
  },
];

const benefits = [
  "Competitive salary & benefits",
  "Research funding & labs access",
  "Professional development programs",
  "Flexible / hybrid working",
];

const testimonials = [
  {
    name: "Dr. Sita Rana",
    role: "Associate Professor",
    text: "Working here means exciting research and a genuine supportive community. I've grown a lot in the last 3 years.",
  },
  {
    name: "Mr. Ramesh Thapa",
    role: "Lab Technician",
    text: "Great facilities and friendly colleagues — the best place to learn practical skills.",
  },
];

// small reusable motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Career() {
  return (
    <div className=" mt-20 min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="relative bg-gradient-to-br from-indigo-700 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Join our academic community
            </h1>
            <p className="mt-4 text-lg md:text-xl text-indigo-100/90">
              Teach, research, and inspire the next generation. Explore open positions across
              departments and be part of our mission to advance knowledge.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#openings"
                className="inline-flex items-center bg-yellow-400 text-black px-5 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg"
              >
                View Openings
              </a>

              <a
                href="#apply"
                className="inline-flex items-center border border-white/30 px-5 py-3 rounded-lg font-medium hover:bg-white/10"
              >
                How to apply
              </a>
            </div>
          </motion.div>
        </div>
        {/* Decorative curve */}
        <svg
          className="w-full"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C480,80 960,0 1440,80 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </header>

      <main className="container mx-auto px-6 -mt-12">
        {/* Why Work With Us */}
        <section className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Why work with us</h2>
              <p className="mt-3 text-gray-600">
                We combine teaching excellence with impactful research, strong industry ties,
                and a collaborative culture. Faculty and staff have access to excellent
                facilities, funding opportunities, and a steady path for professional growth.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <FiUsers className="text-2xl text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Collaborative Culture</h4>
                    <p className="text-gray-500 text-sm">Cross-disciplinary teams and open labs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="text-2xl text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Flexible Work</h4>
                    <p className="text-gray-500 text-sm">Hybrid schedules & generous leave policies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiMail className="text-2xl text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Strong Support</h4>
                    <p className="text-gray-500 text-sm">Dedicated HR & research admin teams.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 grid place-items-center text-indigo-600 font-semibold">R</div>
                  <div>
                    <h4 className="font-semibold">Research Funding</h4>
                    <p className="text-gray-500 text-sm">Grant support and lab budgets available.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=60"
                alt="Campus"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Openings + Apply CTA */}
        <section id="openings" className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <motion.h3
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Current Openings
            </motion.h3>

            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={job.id}
                  className="bg-white p-5 rounded-lg shadow-sm flex justify-between items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  custom={i}
                  variants={fadeUp}
                >
                  <div>
                    <h4 className="font-semibold text-lg">{job.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{job.description}</p>
                    <div className="mt-2 text-xs text-gray-400">{job.type} • Deadline: {job.deadline}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#apply"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
                    >
                      Apply
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50"
                    >
                      Details
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar: Benefits + CTA */}
          <aside className="space-y-4">
            <motion.div
              className="bg-white p-5 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-bold">Benefits</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-indigo-600/80"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              id="apply"
              className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white p-5 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold">Ready to apply?</h4>
              <p className="text-sm mt-2 text-indigo-100/90">Prepare your CV, cover letter and relevant documents.</p>
              <a
                href="mailto:hr@academic.com?subject=Application%20Enquiry"
                className="mt-4 inline-block bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold"
              >
                Contact HR
              </a>
            </motion.div>
          </aside>
        </section>

        {/* Testimonials */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold">Voices from our team</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <p className="text-gray-700">“{t.text}”</p>
                <cite className="mt-3 block font-medium text-sm text-gray-600">{t.name} — {t.role}</cite>
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* FAQ / How to apply steps */}
        <section className="mt-10 bg-white rounded-lg shadow-md p-6">
          <h4 className="text-xl font-bold">How to apply</h4>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-600">
            <li>Prepare CV, cover letter, and required documents (transcripts, publications).</li>
            <li>Click &quot;Apply&quot; on the job post and submit via our portal, or email HR if instructed.</li>
            <li>Shortlisted candidates will be invited for interviews.</li>
            <li>Offers will be sent by email with onboarding instructions.</li>
          </ol>
        </section>

        {/* Footer CTA */}
        <section className="mt-12 mb-20 text-center">
          <motion.div
            className="inline-block bg-indigo-700 text-white px-8 py-4 rounded-2xl shadow-lg"
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold">Want to stay updated?</h4>
            <p className="text-sm text-indigo-100/90">Subscribe to our careers newsletter.</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
