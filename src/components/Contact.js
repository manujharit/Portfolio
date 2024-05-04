import React from 'react'
import LINKS from '../content/links'

const { GMAIL } = LINKS

const Contact = () => {
    return (
        <div className='flex flex-col mt-10'>
            <label className='text-left w-[full] text-2xl font-bold my-4 text-white'>GET IN TOUCH</label>
            <label className='text-justify w-[full] text-sm text-gray-400'>My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</label>
            <div className='flex justify-center items-center my-10'>
                <a href={GMAIL} className='text-center text-bold text-teal-500 bg-slate-900 py-3 px-5 mt-4 border border-solid border-teal-500 rounded-md hover:bg-slate-800'>Say Hello</a>
            </div>
        </div>
    )
}

export default Contact