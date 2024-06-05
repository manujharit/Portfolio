

const WorkExDesc = ({ desc }) => {
    const { topic, description } = desc
    return (
        <li className="mb-2 text-sm text-justify" key={topic}><b className="text-gray-600">{topic}</b> : <span className="text-gray-500">{description} </span></li>
    )
}

export default WorkExDesc