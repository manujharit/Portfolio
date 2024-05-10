
import { useContext } from 'react';
import { Link } from 'react-scroll';
import ActiveSection from '../utils/ActiveSection';

const Navbar = () => {
    const {activeSection, setActiveSection} = useContext(ActiveSection)
    return (
        <div className={`mt-10 transition-opacity duration-700`}>
            <ul>
                <li className={activeSection === 'about' ? 'text-white text-xl' : 'text-md'}>
                    <Link to='About' smooth={true} duration={500} onClick={() => setActiveSection('about')}>-- About</Link>
                </li>
                <li className={activeSection === 'experience' ? 'text-white text-xl' : 'text-md'}>
                    <Link to="Experience" smooth={true} duration={500} onClick={() => setActiveSection('experience')}>-- Work Experience</Link>
                </li>
                <li className={activeSection === 'contact' ? 'text-white text-xl' : 'text-md'}>
                    <Link to="Contact" smooth={true} duration={500} onClick={() => setActiveSection('contact')}>-- Contact Me</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;