








import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projectData = [
    {
        id: 1,
        img: project1,
        title: "Project #1",
        frontend: "HTML, CSS, JavaScript, Bootstrap",
        backend: "PHP, MySQL",
        description: "A comprehensive digital platform designed to offer beauty-related services. This fullstack application allows individuals to access professional beauty treatments from the comfort of their homes. Key features include the ability to purchase beauty products and schedule appointments with beauty professionals online.",
        details: "The project is divided into three main modules: \n" +
            "1. **Beauty Services**: Facilitates online appointments with beauty professionals. \n" +
            "2. **Product Purchases**: Provides a platform for customers to buy beauty products. \n" +
            "3. **Appointment Scheduling**: Allows users to schedule their beauty appointments conveniently through the digital platform.",
    },
    {
        id: 2,
        img: project2,
        title: "Project #2",
        frontend: "HTML, CSS, JavaScript, Bootstrap",
        backend: "Python-Flask, MySQL",
        description: "An advanced indoor airport map application. This application provides a detailed layout of the terminal building, including key facilities and amenities such as check-in counters, security checkpoints, boarding gates, restrooms, lounges, shops, and dining options.",
        details: "Features of this project include: \n" +
            "1. **Detailed Terminal Layout**: Offers a comprehensive map of the airport terminal, highlighting essential facilities. \n" +
            "2. **Navigation Assistance**: Helps passengers efficiently navigate the airport by locating their departure gate and essential services. \n" +
            "3. **Service Information**: Provides information on available services and amenities such as dining options, shops, and lounges. \n",
    },
    {
        id: 3,
        img: project3,
        title: "Project #3",
        frontend: "React",
        backend: "Firebase",
        description: "A feature-rich clothing eCommerce platform. This application allows users to browse a wide range of clothing items, view product details, and make purchases directly through the website.",
        details: "Key features of this eCommerce platform include: \n" +
            "1. **Product Catalog**: Allows users to browse through a variety of clothing items with detailed descriptions and high-quality images. \n" +
            "2. **Shopping Cart**: Enables users to add items to their cart, review their selections, and proceed to checkout. \n" +
            "3. **User Accounts**: Provides options for users to create accounts, track their order history, and manage their personal information. \n" +
            "4. **Secure Payment Gateway**: Integrates with a secure payment gateway to process transactions safely. \n" +
            "5. **Product Filters and Search**: Offers filtering options and a search feature to help users find products easily. \n" +
            "6. **Order Tracking**: Allows users to track their orders and view shipping status.",
    },
    {

        id: 4,
        img: project4,
        title: "Project #4",
        frontend: "React",
        description: "A feature-rich clothing eCommerce platform. This application allows users to browse a wide range of clothing items, view product details, and make purchases directly through the website.",
        details: "Key features of this eCommerce platform include: \n" +
            "1. **Product Catalog**: Allows users to browse through a variety of clothing items with detailed descriptions and high-quality images. \n" +
            "2. **Shopping Cart**: Enables users to add items to their cart, review their selections, and proceed to checkout. \n"


    }
];

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectData.find(p => p.id === parseInt(id));

    useEffect(() => {
        // Adjust scroll position if necessary
        window.scrollTo({
            top: window.scrollY - 80, // Adjust this value based on your navbar height
            behavior: 'smooth'
        });
    }, []);

    if (!project) {
        return <div className='text-center text-gray-300 p-6'>Project not found</div>;
    }

    return (
        <div className='relative max-w-[1000px] mx-auto p-6 sm:text-sm pt-32'>
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className='absolute top-4 left-4 p-2 text-gray-200 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 z-20'
                style={{ zIndex: 20 }} // Ensure the button is above other elements
            >
                &lt; Back
            </button>

            {/* Project Title */}
            <h2 className='text-3xl font-bold text-gray-200 mb-6 text-center'>{project.title}</h2>

            {/* Project Image */}
            <div className='flex justify-center mb-6'>
                <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: '60%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                    className='rounded-lg shadow-lg'
                />
            </div>

            {/* Project Description */}
            <div className='mb-6'>
                <p className='text-gray-300 mb-4'><strong>Description:</strong> {project.description}</p>

                {/* Frontend and Backend Info */}
                {project.frontend && <p className='text-gray-300 mb-4'><strong>Frontend:</strong> {project.frontend}</p>}
                {project.backend && <p className='text-gray-300 mb-4'><strong>Backend:</strong> {project.backend}</p>}

                {/* Project Details */}
                <p className='text-gray-300'><strong>Details:</strong> {project.details}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;
