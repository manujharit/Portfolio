import { CDN_URL, GITHUB } from "../configs/configs"
import PageHeading from "./PageHeading"


const Work = () => {
    const avataarUrl = 'n9s52cxgimvbziw2zbod'
  return (
    <div className=" my-[15%] md:my-[12%] flex flex-col justify-center items-center">
        <PageHeading head={'Work'}/>
        <span className="mx-[10%] text-center text-gray-800 my-4">You'll find all my upcoming projects right here. I'm really pouring my heart and soul into this work, and I can't wait to share the finished products with you soon! In the meantime, you can check out my latest code on my <a href={GITHUB} target="_blank" className="text-blue-600 hover:underline">GitHub</a>.</span>
        {/* <div className="border-b-2 border-gray-300 w-[95%]"></div> */}
        <div className="mt-[5%] mx-[5%] justify-center">
            <img  src={CDN_URL+avataarUrl+'.png'} />
        </div>
        {/* <div className="mx-[10%] text-center text-gray-800 my-4">I'm cooking up some awesome new projects in my little dev lab. As soon as they're ready, I'll be showcasing them right here. Trust me, the good stuff is coming your way soon!</div> */}
        
    </div>
  )
}

export default Work