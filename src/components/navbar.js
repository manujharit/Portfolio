import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const Links = [
        { name: 'Timeline', link: '/timeline' },
        { name: 'Work', link: '/work' },
        { name: 'About', link: '/about' },
        { name: 'Tech', link: '/tech' }
    ]
    return (
        <div className='z-10 fixed top-0 flex items-center justify-between bg-opacity-50 bg-white/50 backdrop-blur-sm border my-[1%] px-[5%] w-[50%] rounded-2xl h-[7%] drop-shadow-md shadow-gray-700'>
            <div className='flex justify-center w-[30%]'>
                <Link to='/' className=' font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>{"</> MANUJ"}</Link>
            </div>
            <div className='flex justify-between w-[45%]'>
                {Links.map(link => <Link to= {link.link} className='text-black hover:text-violet-500 font-semibold'>{link.name}</Link>)}
            </div>
            {/* <div>
                <button className='text-black hover:text-orange-500 font-semibold'>D</button>
            </div> */}
        </div>
    )
}

export default Navbar