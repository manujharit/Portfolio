
import data from '../content/workEx.json'
import WorkExCard from './WorkExCard'
import { useContext, useEffect } from 'react'
import ActiveSection from '../utils/ActiveSection'
import useScreenSize from '../hooks/useScreenSize'

const workExp = data.workExperience
const WorkExperience = () => {
  const { setActiveSection } = useContext(ActiveSection)
  const isnotMobileorTablet = useScreenSize()
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfViewportHeight = window.innerHeight / 2;
      const experienceSection = document.getElementById('Experience')
      const sectionTop = experienceSection.offsetTop

      if (
        sectionTop < scrollPosition + halfViewportHeight
      ) {
        setActiveSection('experience');
      }
    };

    if (!isnotMobileorTablet) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }
  }, []);

  return (
    <div className='mt-10 flex flex-col' id="Experience">
      <span className='text-2xl font-bold text-white'>EXPERIENCE</span>
      <span className='text-sm text-justify my-4'>
        Over the course of my three-year tenure as a Full Stack Developer, I've encountered a multitude of challenges in my professional expedition. These experiences have compelled me to go above and beyond, investing extra efforts. This journey has not only honed my skills but also reinforced my commitment to delivering excellence in every project.
      </span>
      <div className='flex flex-col justify-center items-center mt-4'>
        {workExp.map((data) => <WorkExCard key={data.id} data={data} />)}
      </div>
    </div>
  )
}

export default WorkExperience
