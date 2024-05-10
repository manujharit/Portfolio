import LINKS from '../content/links'
import useScreenSize from '../hooks/useScreenSize';
import Navbar from './Navbar';;

const { LINKEDIN, GMAIL, GITHUB, TWITTER, RESUME } = LINKS

const Introduction = () => {
    const isMobileorTablet = useScreenSize()
    return (
        <div className='relative sticky top-0'>
            <div className="flex flex-col justify-center lg:px-[25%] lg:py-[7%]  sm:px-[20%] px-[10%] py-[10%] lg:h-screen ">
                <div className='flex flex-col items-start text-gray-400'>
                    <span className="font-bold text-2xl lg:text-5xl py-2 ">Manuj Haritwal</span>
                    <span className='font-semibold text-lg lg:text-2xl py-2 '>Full Stack Developer</span>
                    <span className='flex flex-wrap text-justify text-sm lg:text-md py-2 '>Accomplished Full Stack Developer with over 3 years of professional experience in developing robust and scalable web
                        applications.</span>
                </div>
                <div className="mt-10 text-md py-2 font-bold text-center hover:underline hover:text-white">
                    <a href={RESUME} target="_blank" >View My Resume ↗</a>
                </div>
                {isMobileorTablet?<Navbar />:''}
                <div className='flex justify-between mt-16 px-[10%] text-white'>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-700 ">
                        <i className="fab fa-linkedin  me-auto rounded-lg "></i>
                    </a>
                    <a href={GMAIL} target="_blank" rel="noopener noreferrer" className="text-3xl text-red-700">
                        <i className="fas fa-envelope me-auto"></i>
                    </a>
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-3xl">
                        <i className="fab fa-github me-auto"></i>
                    </a>
                    <a href={TWITTER} target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-500">
                        <i className="fab fa-twitter me-auto"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Introduction;