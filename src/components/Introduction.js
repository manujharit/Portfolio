import LINKS from '../content/links'
import useScreenSize from '../hooks/useScreenSize';
import Navbar from './Navbar.js';

const { RESUME } = LINKS

const Introduction = () => {
    const isnotMobileorTablet = useScreenSize()
    return (
        <div className='relative sticky top-0'>
            <div className="flex flex-col justify-center lg:px-[25%] lg:py-[7%]  sm:px-[10%] px-[10%] py-[10%] lg:h-screen ">
                <div className='flex flex-col lg:items-start items-center text-gray-400'>
                    <span className="font-bold text-[250%] py-2 mb-[1%] text-gray-300">Manuj Haritwal</span>
                    <span className='font-semibold text-[150%] py-2 mb-[2%]'>Full Stack Developer</span>
                    <span className='flex flex-wrap text-justify text-md lg:text-lg py-2 '>Accomplished Full Stack Developer with over 3 years of professional experience in developing robust and scalable web
                        applications.</span>
                </div>
                <div className="text-center text-bold text-teal-500 bg-slate-900 py-3 px-5 lg:my-[15%] mt-[15%] w-[50%] mx-[25%] border border-solid border-teal-500 rounded-md hover:bg-slate-800">
                    <a href={RESUME} target="_blank" >View My Resume</a>
                </div>
                {isnotMobileorTablet ? <Navbar /> : ''}
            </div>

        </div>
    )
}
export default Introduction;