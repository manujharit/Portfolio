import { useState } from "react"
import PageHeading from "./PageHeading"
import TechStack from "../configs/TechStack"
import { CDN_URL } from "../configs/configs"
import TechCard from "./TechCard"
import ImageShimmer from "./shimmer/ImageShimmer"

const Tech = () => {
  const [showCard, setShowCard] = useState(null)

  const handleMouseEnter = (index) => {
    setShowCard(index)
  }

  const handleMouseLeave = () => {
    setShowCard(null)
  }

  return (
    <div className="my-[15%] md:my-[12%] flex flex-col justify-center items-center">
      <PageHeading head="Tech Stack" />
      <span className="mx-[10%] text-center text-gray-800 my-4">Just like any other dev, I also spend more time searching and experimenting tools than actually coding some senseful things.</span>
      <div className="border-b-2 border-gray-300 w-[95%]"></div>
      <div className="flex flex-wrap justify-between">
        {TechStack.map(tech => <div key={tech.id} className="h-[100px] w-[100px] mx-[10%] my-[5%]"><img key={tech.id} src={CDN_URL + tech.main + '.png'} className="h-[100%] w-[100%] " alt={<ImageShimmer />} onMouseEnter={() => handleMouseEnter(tech.id)} onMouseLeave={() => handleMouseLeave()} />{showCard === tech.id && <div className="hidden md:block"><TechCard data={tech} /></div>}</div>)}
      </div>
    </div>
  )
}

export default Tech