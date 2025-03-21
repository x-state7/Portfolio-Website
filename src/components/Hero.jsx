import React from 'react'
import profilePic from "../assets/OpenSpace.jpg"
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
            >Hemant Kumar
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
            >Software Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center relative '>


            <img
              src={profilePic}
              alt="profile pic"
              class="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-135 lg:h-135 rounded-full shadow-lg opacity-70 border-4 border-none bounce-animation"
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero