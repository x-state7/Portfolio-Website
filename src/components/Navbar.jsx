import React, { useState } from 'react'
import logo from '../assets/rocket.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

  return (
    <nav className=' mb-20 flex items-center justify-between py-6' >
      <div className='flex flex-shrink-0 items-center'>
        <img
          className={`mx-2 w-10 transition-transform duration-2000 ease-in-out animate-bounce`}
          src={logo}
          alt="logo"
        />
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer'>
        <a href='https://www.linkedin.com/in/hemant-kumar-861983277/'>
          <FaLinkedin className='text-blue-400'>
          </FaLinkedin>
        </a>
        <a href='https://github.com/x-state7'>
          <FaGithub></FaGithub>
        </a>

      </div>
    </nav>
  )
}

export default Navbar
