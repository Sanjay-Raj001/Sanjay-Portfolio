import React, { useState } from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

import Reveal from './Reveal';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        img: project1,
        title: "Project #1",
        description: "A Web application built with PHP and MySQL.",
        links: {
            site: "#",
            github: null,
        },
        message: "This project is not available on GitHub.",
    },
    {
        id: 2,
        img: project2,
        title: "Project #2",
        description: "A web application built with Python-Flask and MySQL.",
        links: {
            site: "#",
            github: null,
        },
        message: "This project is not available on GitHub.",
    },
    {
        id: 3,
        img: project3,
        title: "Project #3",
        description: "A Web application built with React.js and Firebase.",
        links: {
            site: "#",
            github: "#",
        },
        message: "This project is under development.",
    },
    {
        id: 4,
        img: project4,
        title: "Project #4",
        description: "A portfolio website With React.js.",
        links: {
            site: "#",
            github: "#",
        },
        message: "This project is not Available.",
    },
];

const Projects = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [messageContent, setMessageContent] = useState('');

    const handleGithubClick = (message) => {
        setMessageContent(message);
        setShowMessage(true);
    };

    const closeMessage = () => {
        setShowMessage(false);
        setMessageContent('');
    };

    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20 pt-24' id="projects">
            <Reveal>
                <h2 className='text-3xl  font-bold  mb-8 flex justify-center pt-16 '>My Projects</h2>
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                            <div className='w-full md:w-1/2 p-4'>
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className='w-full h-full object-cover rounded-lg shadow-lg'
                                />
                            </div>
                            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                                <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex space-x-4'>
                                    {/* <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Details
                        </a> */}
                                    <Link to={`/projectdetails/${project.id}`} className='px-4 py-2  text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'  style={{ backgroundColor: "#0e5865" }}>
                                        View Details
                                    </Link>
                                    <button
                                        onClick={() => handleGithubClick(project.message)}
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300' >
                                        <AiOutlineGithub className='text-2xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}

                {showMessage && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <p className="text-lg text-gray-800">{messageContent}</p>
                            <button
                                onClick={closeMessage}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Reveal>
        </div>
    );
}

export default Projects;

