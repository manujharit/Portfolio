import useScreenSize from "../hooks/useScreenSize"
import Skills from "./skills"
import WorkExHead from "./WorkExHead"

const WorkExCard = ({ data }) => {
    const screenSize = useScreenSize()
    const handleClick = () => {
        if (screenSize) {
            window.open(data.companyUrl, '_blank')
        }
    }
    return (
        <div className=" w-[100%] my-2 lg:p-4 lg:hover:shadow-inner lg:hover:bg-slate-800 lg:hover:shadow-cyan-950 lg:hover:rounded-lg" onClick={handleClick}>
            <div className="flex lg:flex-row flex-col ">
                <div className="w-full lg:w-1/4">
                    <label className="text-xs px-1">{data.duration}</label>
                </div>
                <div className="w-full lg:w-3/4 flex flex-col px-1">
                    <WorkExHead data={data}/>
                    {data.shortDescription && (<label className="text-xs mb-3">{data.shortDescription}</label>)}
                    <label className="text-sm text-justify my-2">{data.detailedDescription}</label>
                    <div className="flex flex-wrap">
                        {data.skills.map((skill) => (<Skills skill={skill} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExCard