import { CDN_URL } from "../configs/configs"

const TechCard = ({ data }) => {
    const { title, main, desc, tag } = data
    return (
        <div className="relative w-[270px] left-[-85px] top-[15px] flex flex-row border justify-center items-center rounded-2xl border-solid border-gray-500 p-1 bg-white drop-shadow-lg z-10">
            <div className="absolute top-[-10px] left-[50%] translate-x-[-50%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px]  border-r-transparent border-b-[10px]  border-b-gray-500" />
            <div className="absolute top-[-8px] left-[50%] translate-x-[-50%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px]  border-r-transparent border-b-[8px]  border-b-white" />

            <div className="w-[80%] text-justify px-3">
                <h1><b className="text-gray-800 text-[70%] font-bold">{title}</b></h1>
                <h4 className="text-gray-600 text-[60%]">{desc}</h4>
            </div>
            <div><span className="text-white font-semibold text-[60%] bg-black rounded-2xl px-2">{tag}</span></div>
        </div>
    )
}

export default TechCard