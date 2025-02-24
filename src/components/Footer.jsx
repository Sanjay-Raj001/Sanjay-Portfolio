import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Reveal from './Reveal'

function Footer() {
  return (
    <>
    <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center p-6 md:p-20 text-sm md:text-lg mt-12 border-t'>
      <Reveal>
        <div className='space-y-4 text-center md:text-left'>
          <h3 className='text-2xl text-gray-200 font-semibold'>Sanjay Raj</h3>
          <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-4xl">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <p className='text-gray-400 mt-6 md:mt-0 text-center md:text-right'>© 2024 Sanjay Raj</p>
      </Reveal>
    </div>
  </>
  )
}

export default Footer
