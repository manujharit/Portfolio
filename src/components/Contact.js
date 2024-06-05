import { CDN_URL, LINKEDIN,TWITTER } from "../configs/configs"


const Contact = () => {
    const data = [
        { id: 0, user: 'manuj-haritwal', imageId: 'eub6rgmsq4ngfuw3o9cr.png', class: 'text-blue-700 font-bold mb-[10px]', link:LINKEDIN },
        { id: 2, user: 'ManujHarit', imageId: 'eep30q9hzpuppql0tleu.png', class: 'text-black font-bold mb-[10px]', link:TWITTER },
    ]
    return (
        <div className="border flex flex-row rounded-3xl drop-shadow-md shadow-md shadow-gray-400 bg-pink-50 h-[350px] px-[7%] py-[10%]">
            <div className=" flex flex-col w-[60%]">
                <span className="font-bold text-3xl text-blue-600 mb-[3%]">Say hi!</span>
                <span className="text-justify text-lg mb-[5%]">
                    If you have any queries or would like to discuss potential opportunities, please don't hesitate to reach out to me using given links.
                </span>
                <div className="flex flex-row">
                    {data.map(social => <a href={social.link} target='_blank' key={social.id} className="flex flex-row mx-[1%]" ><img src={CDN_URL + social.imageId} className="w-[20px] h-[20px] rounded-md mx-[5px]" /><span className={social.class}>{social.user}</span></a>)}
                </div>
            </div>
            <div className="w-[40%] ml-[2%]">
                <img src={CDN_URL + 'inxtwky8wrvpzapufasa.png'} />
            </div>
        </div>  
    )
}

export default Contact