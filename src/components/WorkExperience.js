import WorkExDesc from "./WorkExDesc";
import PageHeading from "./PageHeading";

const WorkExperience = () => {
    const data = [
        {
            id: 0,
            title: "Senior Systems Engineer",
            duration: "July 2021 - Present",
            org: "Infosys Ltd.",
            skills: ["React.js", "Redux.js", "Node.js", "TypeScript", "Serverless Function", "Microsoft Azure", "MongoDB"],
            desc: [
                {
                    "topic": "Notable Work",
                    "description": "Designed and developed an Azure function to automate all employees’s Workplace profile updates via Service Bus integration, optimizing operational workflows."
                },
                {
                    "topic": "Accelerated Application Ticket Resolution",
                    "description": "Developed a web application that significantly accelerated application ticket resolution for the client’s team, reducing analysis time by 80%."
                },
                {
                    "topic": "Application Maintenance",
                    "description": "Ensured seamless operation and maintained high availability of client applications across all locations in North America, proactively identifying and resolving issues."
                },
                {
                    "topic": "Performance Optimization",
                    "description": "Optimized Azure Functions by implementing performance enhancements and exception handling mechanisms, resulting in improved execution speed and reduced failures."

                }
            ]
        },
        {
            id: 1,
            title: "Systems Engineer Trainee",
            duration: "Feb 2021 - Jun 2021",
            org: "Infosys Ltd.",
            skills: ["JavaScript", "React.js", "Springboot", "Java", "MySQL", "SCRUM"],
            desc: [
                {
                    "topic": "Agile DevOps Monitoring",
                    "description": "Developed a web application for tracking task progress in Agile projects, enabling task creation, progress updates, and tracking through dashboards"
                },
                {
                    "topic": "Database Architecture",
                    "description": "Architected and implemented a highly optimized MySQL database schema, ensuring efficient data storage and retrieval for enhanced application performance."
                },
                {
                    "topic": "API Management",
                    "description": "Engineered a robust Java Spring Boot application to handle API management and secure data storage, guaranteeing data integrity and reliable functionality."
                }
            ]
        }
    ];
    return (
        <div className="mt-[15%] md:mt-[12%] flex flex-col justify-center items-center">
            <PageHeading head="Timeline"/>
            <span className="text-center text-gray-500 mx-[10%] mb-10">The linear view of some milestones and notable moments that happened so far. And you can always find more information on LinkedIn.</span>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-[5%] mx-[5%]">
                {data.map((item) => (
                    <li className="mb-10 ms-6" key={item.id}>
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:bg-blue-900">
                            <svg
                                className="w-2.5 h-2.5 text-teal-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                            <span className="font-bold text-teal-600">{item.title}{" "}</span>
                            {item.id === 0 && (
                                <span className="bg-cyan-700 text-[#fff] text-sm font-medium me-2 px-2.5 py-0.5 border-sky-100 rounded ms-3">
                                    Latest
                                </span>
                            )}
                        </h3>

                        <p className="text-sm text-gray-500 font-semibold"> {item.org}  <time className=" mb-2 text-sm font-normal leading-none text-gray-400 ">
                        | {item.duration}
                        </time></p>
                        <div className="mt-4">
                            <ul>
                                {item.desc.map(desc => <WorkExDesc key={desc.topic} desc={desc} />)}
                            </ul>
                        </div>
                        <div className="flex flex-wrap mt-4">
                            {item.skills.map((i, idx) => (
                                <span key={idx} className='bg-cyan-900 text-white text-sm font-medium me-2 px-2.5 py-1 rounded mt-2'>
                                    {i}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default WorkExperience