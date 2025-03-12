import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-[#4a4a4a] pb-20 relative">
      {/* Background Stars Effect */}
      <div className="absolute inset-0 bg-[url('/path-to-stars.png')] bg-cover opacity-30"></div>

      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-4xl font-[Inter] my-16 text-white neon-glow"
      >
        Experience
      </motion.h2>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto relative z-10">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-col lg:flex-row mb-12">
            {/* Year Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/4 w-full mb-4 lg:mb-0 text-center lg:text-left"
            >
              <p className="text-sm text-[#999] font-medium tracking-wider neon-text">
                {experience.year}
              </p>
            </motion.div>

            {/* Role & Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="  lg:w-3/4 w-full bg-[rgba(38,38,38,0.6)] p-6 rounded-lg shadow-lg border border-[#333]  hover:border-purple-500 transition-transform hover:scale-[1.05]"
            >
              <h4 className="text-lg font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-purple-400 text-sm">{experience.company}</span>
              </h4>
              <p className="text-gray-300 mt-2 text-sm">{experience.description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap mt-4">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 px-3 py-1 bg-[#222] text-purple-400 text-xs font-medium rounded-full shadow-md border border-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
