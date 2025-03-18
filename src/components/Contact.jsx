import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import './Contact.css'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'>Get In Touch
      </motion.h2>

      <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'>{CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='my-4'>{CONTACT.phoneNo}
        </motion.p>

        <button className='hover:text-[25px] transition-all transition-ease duration-200'><a href='mailto:chaudharyhemantkumar030@gmail.com' className='border-none text-gray-300'>Mail Me</a></button>

      </div>
    </div>



  )
}
export default Contact;