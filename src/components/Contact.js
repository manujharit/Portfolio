import React from 'react'
import LINKS from '../content/links'
import { useContext, useEffect } from 'react'
import ActiveSection from '../utils/ActiveSection'

const { GMAIL } = LINKS

const Contact = () => {
    const { setActiveSection } = useContext(ActiveSection)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const halfViewportHeight = window.innerHeight / 2;
            const experienceSection = document.getElementById('Contact')
            const sectionTop = experienceSection.offsetTop

            if (
                sectionTop < scrollPosition + halfViewportHeight
            ) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='flex flex-col mt-10' id="Contact">
            <label className='text-left w-[full] text-2xl font-bold my-4 text-white'>GET IN TOUCH</label>
            <label className='text-justify w-[full] text-sm text-gray-400'>I'm actively seeking job opportunities where I can make a meaningful impact, expand my knowledge, and develop professionally. If you have a fitting opportunity aligned with my skills and background, feel free to reach out. My inbox is readily available for any inquiries or even just a friendly greeting — I'll do my utmost to respond promptly!</label>
            <div className='flex justify-center items-center my-10'>
                <a href={GMAIL} className='text-center text-bold text-teal-500 bg-slate-900 py-3 px-5 mt-4 border border-solid border-teal-500 rounded-md hover:bg-slate-800'>Contact Me</a>
            </div>
        </div>
    )
}

export default Contact