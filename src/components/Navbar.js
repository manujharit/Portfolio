
import { useContext } from 'react';
import { Link } from 'react-scroll';
import ActiveSection from '../utils/ActiveSection';

const Navbar = () => {
    const { activeSection } = useContext(ActiveSection)
    return (
        <div className="mt-10 transition-opacity duration-700">
            <ul>
                <li className={activeSection === 'about' ? 'text-white text-2xl mb-4' : 'text-xl mb-4'}>
                    <Link to='About' className='flex flex-row font-semibold' smooth={true} duration={100}><span  className={activeSection === 'about' ? 'border-t-[2px] mt-[3.5%] mr-3 h-0 border-white w-10' : 'border-t-[1px] mt-[3%] mr-2 h-0 border-gray-400 w-10'}> </span>About</Link>
                </li>
                <li className={activeSection === 'experience' ? 'text-white text-2xl mb-4' : 'text-xl mb-4'}>
                    <Link to="Experience" className='flex flex-row font-semibold' smooth={true} duration={100}><span  className={activeSection === 'experience' ? 'border-t-[2px] mt-[3.5%] mr-3 h-0 border-white w-10' : 'border-t-[1px] mt-[3%] mr-2 h-0 border-gray-400 w-10'}> </span> Work Experience</Link>
                </li>
                <li className={activeSection === 'contact' ? 'text-white text-2xl mb-4' : 'text-xl mb-4'}>
                    <Link to="Contact" className='flex flex-row font-semibold' smooth={true} duration={100}><span  className={activeSection === 'contact' ? 'border-t-[2px] mt-[3.5%] mr-3 h-0 border-white w-10' : 'border-t-[1px] mt-[3%] mr-2 h-0 border-gray-400 w-10'}> </span>Contact Me</Link>
                </li>
            </ul>
        </div>
    )
}


export default Navbar;
