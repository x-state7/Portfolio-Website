import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiGit, SiGithub, SiPython, SiJavascript } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Glittering + Shattering Effect
const burstEffect = {
  clicked: {
    scale: [1, 1.3, 0.8, 1],
    rotate: [0, 10, -10, 0],
    opacity: [1, 0.5, 1],
    transition: { duration: 3, ease: "easeInOut" },
  },
};

const Technology = () => {
  const controls = {
    react: useAnimation(),
    git: useAnimation(),
    github: useAnimation(),
    python: useAnimation(),
    javascript: useAnimation(),
  };

  const handleClick = (tech) => {
    controls[tech].start("clicked");
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech<span className="text-neutral-500">Stack</span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          onClick={() => handleClick("react")}
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <motion.div animate={controls.react} variants={burstEffect}>
            <RiReactjsLine className="text-7xl text-cyan-500" />
          </motion.div>
        </motion.div>

        {/* Git */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          onClick={() => handleClick("git")}
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <motion.div animate={controls.git} variants={burstEffect}>
            <SiGit className="text-7xl text-red-500" />
          </motion.div>
        </motion.div>

        {/* GitHub */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          onClick={() => handleClick("github")}
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <motion.div animate={controls.github} variants={burstEffect}>
            <SiGithub className="text-7xl text-gray-800 dark:text-white" />
          </motion.div>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          onClick={() => handleClick("python")}
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <motion.div animate={controls.python} variants={burstEffect}>
            <SiPython className="text-7xl text-blue-500" />
          </motion.div>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          onClick={() => handleClick("javascript")}
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <motion.div animate={controls.javascript} variants={burstEffect}>
            <SiJavascript className="text-7xl text-yellow-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
