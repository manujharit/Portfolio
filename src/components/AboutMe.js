
import data from '../content/workEx.json'
import Skills from "./skills"
import ActiveSection from '../utils/ActiveSection'
import { useEffect, useContext } from 'react'
import useScreenSize from '../hooks/useScreenSize'
const { technicalSkills } = data

const AboutMe = () => {
    const { setActiveSection } = useContext(ActiveSection)
    const isnotMobileorTablet = useScreenSize()
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const halfViewportHeight = window.innerHeight / 2;
            const experienceSection = document.getElementById('About')
            const sectionTop = experienceSection.offsetTop

            if (
                sectionTop < scrollPosition + halfViewportHeight
            ) {
                setActiveSection('about');
            }
        };
        if (!isnotMobileorTablet) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <div className="flex flex-col" >
            <p className="text-gray-400 text-justify text-sm lg:text-md">
                I'm a Full Stack Web Developer building the Front-end and
                Back-end of Websites and Web Applications that leads to the
                success of the overall product.
                <br />
                <br />I have a strong industry background of <b className='text-white'>3 years</b>.
                Currently, I hold the position of
                <b className='text-white'> Senior Systems Engineer at Infosys</b>, where I have honed
                my expertise in JavaScript. My professional experience includes
                proficiently working with React, Spring Boot, and NodeJS
                technologies. Moreover, I am well-versed in applying SCRUM and
                Agile methodologies to ensure efficient project management and
                delivery.
                <br />
                <br />

            </p>
            <label className="text-2xl font-bold mt-8 mb-2 text-white">SKILLS</label>
            <ul>
                {technicalSkills.map(skillCategory => (
                    <div key={skillCategory.id} className="p-2 m-2">
                        <b className='text-gray-400'>{skillCategory.id}:</b>
                        <div className="flex flex-wrap">
                            {
                                skillCategory.skills.map(skill => <Skills key={skill} skill={skill} />)
                            }
                        </div>
                    </div>
                )
                )
                }
            </ul>


        </div>
    )
}

export default AboutMe