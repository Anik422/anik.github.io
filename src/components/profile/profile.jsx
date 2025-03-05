import React, { useState, useEffect } from 'react';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import Footer from './footer';
import profile_info from "../../database/profile_info.json";

// Mapping social media icons to their respective components
const ICON_MAP = {
    "Github": Github,
    "LinkedIn": Linkedin,
    "Twitter": Twitter,
    "Facebook": Facebook  // Note: No direct Lucide Facebook icon, using default icon
};

// Social media link component for consistent styling
const SocialMediaLink = ({ name, link }) => {
    const IconComponent = ICON_MAP[name] || Facebook;
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
            <IconComponent className="w-6 h-6 text-gray-900 dark:text-white" />
        </a>
    );
};

// Professional journey item component
const ProfessionalJourneyItem = ({ company, position, duration, description, icon }) => (
    <li className="mb-4">
        <b className="text-gray-700 dark:text-white tracking-widest">
            {icon} {company}
        </b> 
        - {position}
        <p className="text-xs text-gray-500 dark:text-gray-300">{duration}</p>
        <p className="mt-1">{description}</p>
    </li>
);

export default function Profile() {
    // Destructure profile information
    const { 
        first_name, 
        last_name, 
        title, 
        about_me, 
        profile_picture, 
        banner_picture, 
        contact_links, 
        professional_journey 
    } = profile_info;

    // Dark mode state management
    const [darkMode, setDarkMode] = useState(false);

    // Apply dark mode class to document
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="max-w-[55ch] mx-auto min-h-100 bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Banner and Profile Picture Section */}
            <div
                className="h-32 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${banner_picture})` }}
            >
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="rounded-full border-4 border-white dark:border-gray-900 overflow-hidden">
                        <img
                            src={profile_picture}
                            alt="Profile"
                            className="w-32 h-32 object-cover"
                        />
                    </div>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Personal Information Section */}
                <section className="text-center pt-10 pb-0">
                    <h1 className="font-mono text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {first_name} {last_name}
                    </h1>
                    <p className="text-sm mt-2 leading-tight dark:text-white">{title}</p>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-4 pt-20">
                        {contact_links?.map((contact) => (
                            <SocialMediaLink 
                                key={contact.name} 
                                name={contact.name} 
                                link={contact.link} 
                            />
                        ))}
                    </div>
                </section>

                {/* About and Professional Journey Section */}
                <section className="mb-20">
                    <div id="me-section" className="content-div my-12" style={{ display: "block" }}>
                        <h4 className="text-gray-700 dark:text-white py-2">I'm</h4>
                        <p className="text-gray-500 dark:text-gray-300 text-justify">
                            {about_me}
                        </p>

                        <h4 className="text-gray-700 dark:text-white py-2 mt-10 mb-2">
                            My Professional Journey
                        </h4>

                        <ul 
                            id="professional-journey" 
                            className="text-gray-500 dark:text-gray-300 text-justify text-sm"
                        >
                            {professional_journey.map((journey, index) => (
                                <ProfessionalJourneyItem 
                                    key={index} 
                                    {...journey} 
                                />
                            ))}
                        </ul>

                        <a
                            href="https://www.linkedin.com/in/aniks422/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-blue-500 text-white p-2 rounded-sm mt-4 inline-block"
                        >
                            Let's Connect <span className="bg-white text-blue-500 font-bold px-2 py-1 rounded-sm">in</span>
                        </a>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}