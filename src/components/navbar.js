
import { useContext } from 'react';
import { Link } from 'react-scroll';
import ActiveSection from '../utils/ActiveSection';

const Navbar = () => {
    const {activeSection, setActiveSection} = useContext(ActiveSection)

    const handleActiveSection = (activeSec) => {
        setTimeout(()=>{
            setActiveSection('activeSec')
        },50)
    }
    return (
        <div className={`mt-10 transition-opacity duration-700`}>
            <ul>
                <li className={activeSection === 'about' ? 'text-white text-xl' : 'text-md'}>
                    <Link to='About' className='flex flex-row font-semibold' smooth={true} duration={100} onClick={() => handleActiveSection('about')}><hr className='w-6 mt-3.5 mr-4'/> About</Link>
                </li>
                <li className={activeSection === 'experience' ? 'text-white text-xl' : 'text-md'}>
                    <Link to="Experience" className='flex flex-row font-semibold' smooth={true} duration={100} onClick={() => handleActiveSection('experience')}><hr className='w-6 mt-3.5 mr-4'/>  Work Experience</Link>
                </li>
                <li className={activeSection === 'contact' ? 'text-white text-xl' : 'text-md'}>
                    <Link to="Contact" className='flex flex-row font-semibold' smooth={true} duration={100} onClick={() => handleActiveSection('contact')}><hr className='w-6 mt-3.5 mr-4'/>  Contact Me</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;