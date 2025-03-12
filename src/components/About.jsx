import React from 'react'
import Globe from "react-globe.gl"
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
      </h2>

      {/* Flexbox ensures side-by-side alignment */}
      <div className='flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-10'>

        {/* Globe Section */}
        <motion.div
          className='w-full lg:w-1/2 flex justify-center'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}>

          <div className='flex flex-col items-center text-white'>
            <div className="text-center mt-4 font-[Inter]">
              <p className="text-lg text-gray-500 font-bold">
                I work remotely across most timezones
              </p>
              <p className="text-md text-gray-300">I'm based in India, with remote work available.</p>
            </div>
            <Globe
              className="-mt-6"
              height={550}
              width={550}
              backgroundColor='rgba(0,0,0,0)'
              backgroundImageOpacity={0.5}
              enablePointerInteraction={true}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
            />

            {/* Text Below Globe */}

          </div>

        </motion.div>

        {/* About Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 flex justify-center lg:justify-start'>

          <p className='my-2 max-w-xl py-6 tracking-tight text-white'>
            {ABOUT_TEXT}
          </p>

        </motion.div>

      </div>
    </div>
  )
}

export default About
