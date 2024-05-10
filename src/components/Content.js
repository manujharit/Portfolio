import AboutMe from "./AboutMe"
import WorkExperience from "./WorkExperience"
import Contact from "./Contact"
import Footer from "./Footer"

const Content = () => {

    return (
        <div className="px-[10%] pt-[10%] pb-[5%]" id="About">
            <AboutMe />
            <WorkExperience />
            <Contact />
            <Footer />
        </div>
    )
}

export default Content