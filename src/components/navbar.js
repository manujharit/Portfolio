import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Links = [
        { name: 'Timeline', link: '/timeline' },
        { name: 'Work', link: '/work' },
        { name: 'About', link: '/about' },
        { name: 'Tech', link: '/tech' }
    ]

    const handleLinkClick = () => {
        setIsOpen(false);
        window.scroll(0, 0)
    };

    const handleLink = () => {
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        if (!isOpen) {
            window.scrollTo(0, 0)
        }
    })

    return (
        <div className='z-10 fixed top-0 flex items-center justify-between bg-opacity-50 bg-white/50 backdrop-blur-sm border lg:my-[1%] px-[5%] w-[100%] md:w-[85%] lg:w-[80%] xl:w-[50%] md:rounded-2xl lg:rounded-2xl h-[7%] drop-shadow-md shadow-gray-700'>
            <div className='flex justify-center w-[50%] md:w-[40%] lg:w-[40%] '>
                <Link to='/' className='font-extrabold text-[150%] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'  onClick={handleLink}>{"</> MANUJ"}</Link>
            </div>
            <div className='hidden md:flex justify-between w-[45%]'>
                {Links.map(link => <Link key={link.name} to={link.link} className='text-black hover:text-violet-500 font-semibold' onClick={handleLink}>{link.name}</Link>)}
            </div>
            <div className='md:hidden flex items-center mr-5'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold '>
                    {!isOpen?'☰':'X'}
                </button>
            </div>
            {isOpen && (
                <div className='absolute flex flex-col justify-end items-center z-10 top-[10%] mt-[13%] left-0 w-[30%] ml-[70%] bg-opacity-50 bg-white/90 rounded-t-lg  rounded-b-xl backdrop-blur-lg border drop-shadow-md shadow-gray-700 md:hidden'>
                    {Links.map(link => (
                        <Link key={link.name} to={link.link} className='block text-[100%] font-bold  p-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500' onClick={handleLinkClick}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar