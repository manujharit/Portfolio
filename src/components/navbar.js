import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

    const Links = [
        { name: 'Timeline', link: '' },
        { name: 'Work', link: '' },
        { name: 'About', link: '' },
        { name: 'Tech', link: '' }
    ]
    return (
        <div className='z-10 fixed top-0 flex items-center justify-between bg-opacity-50 bg-white/50 backdrop-blur-sm border my-[1%] w-[50%] px-[5%] rounded-2xl  h-[7%] drop-shadow-md shadow-gray-700'>
            <div className='flex justify-center w-[30%]'>
                <span className='text-black font-extrabold text-xl hover:text-orange-500'>{"</> MANUJ"}</span>
            </div>
            <div className='flex justify-between w-[45%]'>
                {Links.map(link => <span className='text-black hover:text-orange-500 font-semibold'>{link.name}</span>)}
            </div>
            <div>
                <button className='text-black hover:text-orange-500 font-semibold'>D</button>
            </div>
        </div>
    )
}

export default Navbar