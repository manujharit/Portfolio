import useScreenSize from "../hooks/useScreenSize"
import Skills from "./skills"
import WorkExHead from "./WorkExHead"
import WorkExDesc from "./WorkExDesc"

const WorkExCard = ({ data }) => {
    const screenSize = useScreenSize()

    return (
        <div className=" w-[100%] my-2 lg:p-4 lg:hover:shadow-inner lg:hover:bg-slate-800 lg:hover:shadow-cyan-950 lg:hover:rounded-lg">
            <div className="flex  flex-col ">
                <div className="w-full ">
                    <label className="text-xs px-1">{data.duration}</label>
                </div>
                <div className="w-full flex flex-col px-1">
                    <WorkExHead data={data}/>
                    {data.shortDescription && (<label className="text-xs mb-3">{data.shortDescription}</label>)}
                    <ul className="text-sm">
                    {data.detailedDescription.map((desc) => (
                        <WorkExDesc data={desc} key={desc.topic} />
                    ))}
                    </ul>
                    <div className="flex flex-wrap">
                        {data.skills.map((skill) => (<Skills key={skill} skill={skill} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExCard