import React from 'react';
import AboutPicture from '../assets/about_pic.png'

function About() {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 pt-24' id='about'>
      <div className="md:grid md:grid-cols-2 md:gap-8 sm:py-16">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:order-1">
          <div className="text-left mx-6">
            <h2 className="text-3xl font-semibold mb-4 primary-color">About Me</h2>
            <p className='text-base lg:text-lg'>
            Hello! I’m Sanjay Raj, a passionate software engineer with a keen interest in web, mobile, cloud development, and testing
              <br /><br />
              I recently graduated with a Bachelor’s in Computer Applications (BCA) from MG University (2024) and am currently pursuing my Master’s in Computer Applications (MCA) from IGNOU (January 2025 batch).
              <br /><br />
              As a curious learner and self-starter, I’m continuously exploring and enhancing my skills in software development and testing. I enjoy working with new technologies and strive to stay updated with the latest industry trends.
              <br /><br />
              Feel free to contact me if you’d like to connect or learn more about my work and interests!
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex items-center justify-center  mt-6 md:mt-0 md:order-2">
          <img 
            className='rounded-lg' 
            src={AboutPicture}
            alt="Sanjay Raj" 
            width={300} 
            height={300} 
          />
        </div>
      </div>
    </div>
  );
}

export default About;
