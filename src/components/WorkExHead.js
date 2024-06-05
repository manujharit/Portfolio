import useScreenSize from "../hooks/useScreenSize"

const WorkExHead = ({ data }) => {
  const screenSize = useScreenSize()
  const handleClick = () => {
    if (screenSize) {
      window.open(data.companyUrl, '_blank')
    }
  }
  return (
    <div className="flex flex-col mb-2">

      <label className="text-left w-full text-lg font-bold mb-2 text-white">{data.position}</label>

      <label className="text-sm text-left text-gray-400 lg:text-left font-semibold hover:text-white hover:underline" onClick={handleClick}>{data.company}, {data.location}</label>
    </div>
  )
}

export default WorkExHead