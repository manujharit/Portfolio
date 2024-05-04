
import data from '../content/workEx.json'
import Skills from "./skills"

const { technicalSkills } = data

const AboutMe = () => {
    return (
        <div className="flex flex-col">
            <p className="text-gray-400 text-justify text-sm lg:text-md">
                I'm a Full Stack Web Developer building the Front-end and
                Back-end of Websites and Web Applications that leads to the
                success of the overall product.
                <br />
                <br />I have a strong industry background of <b>3 years</b>.
                Currently, I hold the position of
                <b> Senior Systems Engineer at Infosys</b>, where I have honed
                my expertise in JavaScript. My professional experience includes
                proficiently working with React, Spring Boot, and NodeJS
                technologies. Moreover, I am well-versed in applying SCRUM and
                Agile methodologies to ensure efficient project management and
                delivery.
                <br />
                <br />
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to <b>contact me</b>.
            </p>
            <label className="text-2xl font-bold mt-8 mb-2 text-white">SKILLS</label>
            <ul>
                {technicalSkills.map(skillCategory => (
                    <div key={skillCategory.id} className="p-2 m-2">
                        <b className='text-gray-400'>{skillCategory.id}:</b>
                        <div className="flex flex-wrap">
                            {
                                skillCategory.skills.map(skill => <Skills skill={skill} />)
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