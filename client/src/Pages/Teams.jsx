import  'react';
import data from '../contentdata/data';

const Teams = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 px-4 md:px-16">
      {/* 🔹 Hero / Intro Section */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-600 mb-4">
          Meet Our Team
        </h1>
        <p className="text-gray-600 text-lg">
          We are a passionate group of developers, designers, and thinkers
          building meaningful digital experiences together.
        </p>
      </div>

      {/* 🔹 Team Cards Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto object-cover rounded-full border-4 border-sky-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sky-600">{member.role}</p>
          </div>
        ))}
      </div>

      {/* 🔹 Optional Footer for Team Section */}
      <div className="text-center mt-16 text-gray-500">
        <p>We believe in collaboration, creativity, and commitment.</p>
      </div>
    </div>
  );
};

export default Teams;
