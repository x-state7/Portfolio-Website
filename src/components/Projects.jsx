import React, { useState, useEffect } from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import Arrow from '../assets/arrow-up.png'
import rightArrow from '../assets/right-arrow.png'
import leftArrow from '../assets/left-arrow.png'

const logs = [
  "[SYS] Initializing Mission Control...",
  "[LOG] Establishing connection with project database...",
  "[LIVE] Transmission Signal: Stable ✅",
  "[UPDATE] Project Orion status: 🚀 Launch Ready",
  "[WARNING] Data anomaly detected. Running diagnostics...",
  "[INFO] AI Systems Online. Awaiting next command...",
  "[SUCCESS] Mission objectives uploaded successfully."
];

// const upcomingProjects = [
//   "Project Nebula: A space exploration app",
//   "Project Horizon: A cutting-edge AR experience",
//   "Project Quantum: A machine learning tool for quantum computing",
// ];

const spaceFacts = [
  "Space is completely silent. There's no atmosphere in space to carry sound, so astronauts use radios to communicate.",
  "A day on Venus is longer than a year on Venus. Venus takes 243 Earth days to complete one full rotation but only 225 Earth days to orbit the Sun.",
  "Neutron stars are incredibly dense. A neutron star's mass can be greater than the Sun's, yet it only has a diameter of about 20 kilometers (12.4 miles).",
  "There is a giant cloud of alcohol in space. A massive molecular cloud near the constellation Aquila contains enough alcohol to make 400 trillion trillion pints of beer.",
  "The largest volcano in the solar system is on Mars. Olympus Mons is nearly three times the height of Mount Everest and has a diameter of about 370 miles.",
  "Saturn's moon Titan has lakes of liquid methane. Titan, the second-largest moon in the solar system, has vast lakes and rivers filled with methane and ethane instead of water.",
  "The Milky Way galaxy is on a collision course with the Andromeda galaxy. In about 4.5 billion years, the two galaxies are expected to collide and merge.",
  "A day on Mercury is longer than a year on Mercury. Mercury takes 59 Earth days to rotate once, but only 88 Earth days to orbit the Sun.",
  "Jupiter's Great Red Spot has been storming for over 350 years. The storm is so large that it could fit three Earths inside it.",
  "Astronauts' height changes in space. Without gravity pulling them down, astronauts can grow up to 2 inches taller during long space missions.",
  "Pluto has a heart-shaped glacier. The glacier, called Sputnik Planitia, is located on Pluto's surface and is roughly the size of Texas.",
  "Space is expanding. The universe is constantly expanding, with galaxies moving away from each other, as discovered by Edwin Hubble in the 1920s.",
  "The closest star to Earth is the Sun. After the Sun, the next closest star to Earth is Proxima Centauri, about 4.24 light-years away.",
  "There are more stars in the universe than grains of sand on Earth. It's estimated there are over 100 billion galaxies, each containing millions to billions of stars.",
  "Black holes can 'sing.' The vibrations of supermassive black holes in the centers of galaxies can produce detectable sound waves, creating a low-frequency hum."
];

const projectCount = PROJECTS.length
const Projects = () => {
  const [consoleLogs, setConsoleLogs] = useState(["Booting up..."]);
  const [showFacts, setShowFacts] = useState(false);

  const toggleFacts = () => {
    setShowFacts((prevState) => !prevState);
  };

  useEffect(() => {
    // Simulate adding console logs every 3 seconds
    const interval = setInterval(() => {
      setConsoleLogs((prevLogs) => {
        if (prevLogs.length >= 8) prevLogs.shift(); // Keep only recent logs
        return [...prevLogs, logs[Math.floor(Math.random() * logs.length)]];
      });
    }, 3000);
  }, []);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = PROJECTS[selectedProjectIndex]; // Fix selection
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      }
      else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    })

  }

  return (


    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Projects Section */}
      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="c-section my-20 lg:ml-33 sm:m-0"
      >
        <div className="grid lg:grid-cols-2 sm:flex-col grid-cols-1 mt-12 gap-5 w-full">
          {/* Project Details */}
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 h-[600px] overflow-auto scrollbar-hide">
            <div className="absolute top-0 right-0">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div className="p-2 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img alt="logo" src={currentProject.logo} className="w-10 h-10 shadow-sm" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5 flex-grow">
              <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo ">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              {/* Live Site Checking */}
              <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer text-white-600">
                <p>Check It</p>
                <img src={Arrow} alt="arrow" className="w-3 h-3" />
              </a>
            </div>

            {/* Arrows Buttons */}
            <div className="flex justify-between items-center mt-auto">
              <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                <img src={leftArrow} alt="rightArrow" className="w-4 h-4" />
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                <img src={rightArrow} alt="leftrightArrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mission Control Terminal */}
          <div className="flex bg-[rgba(54,45,68,0.6)] rounded-t-xl sm:ml-11 lg:ml-40 sm:wr-30 lg:w-80 flex-col items-center lg:items-start">
            <div className="bg-[rgba(38,38,38,0.6)] mt-3  text-[#d4d4d4] font-mono p-5 rounded-lg border border-gray-700 sm:mr-0 lg:ml-3 w-74 max-w-xs shadow-lg">
              <div className="flex space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="h-24 overflow-hidden">
                {consoleLogs.map((log, index) => (
                  <p key={index} className="text-[12px]">
                    user@macbook:~$ {log}
                  </p>
                ))}
              </div>
              <motion.span
                className="text-[#d4d4d4]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                █
              </motion.span>
            </div>


            {/* More Projects Coming Soon */}
            <div className="mt-10 sm:mt-62 bg-[rgba(38,38,38,0.5)]  text-white p-6  shadow-lg w-full max-w-xs">

              <div className="text-lg font-semibold mb-3">More Projects Coming Soon</div>
              <p className="text-sm text-gray-300">
                Stay tuned for more exciting projects that will launch in the near future. I am working hard to bring innovative solutions to the table.
              </p>
            </div>
          </div>
        </div>

      </motion.section>
    </div>

  )
}

export default Projects