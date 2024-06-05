const WorkExDesc = ({data}) => {
    const {topic, description} = data

    return  (
        <li className="mb-4 text-justify"><b className="text-white">{topic}</b> : {description} </li>
    )

}

export default WorkExDesc;