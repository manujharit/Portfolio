import useScreenSize  from "../hooks/useScreenSize"

const WorkExHead = ({data}) => {
  const screenSize = useScreenSize()
  return (
    <div className="flex flex-col mb-2">
      {
        screenSize ? (
          <label className="text-left w-full text-lg font-bold mb-2 text-white">{data.position}</label>
        ):(<a href={data.companyUrl} target="_blank" className="text-left w-full text-md font-bold mb-2 text-gray-100 underline">{data.position} 🡥 </a>
        )
      
        }
        <label className="text-sm text-left text-gray-400 lg:text-left font-bold">{data.company}, {data.location}</label>
    </div>
  )
}

export default WorkExHead