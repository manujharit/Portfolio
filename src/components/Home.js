import Contact from "./Contact"
import Experience from "./Experience"

import { CDN_URL, LINKEDIN } from '../configs/configs'

const Home = () => {
    const AvtaarURL = 'evpulqquc120j7mjez3k'
    return (
        <div className="flex flex-col mt-[12%] text-black px-[2%] pt-[5%] font-serif">
            <div className="flex flex-row mb-[5%]">
                <div>
                    <img src={CDN_URL + AvtaarURL} className="h-[100px] w-[100px]" />
                </div>
                <div className="flex flex-col justify-end  mb-5 mx-[2%]">
                    <span className="text-black font-bold text-2xl">
                        Manuj Haritwal
                    </span>
                    <a href={LINKEDIN} target= '_blank' className="hover:underline">@manuj-haritwal</a>
                </div>
            </div>
            <span className="text-justify mb-[5%] text-lg ">As a developer with a keen eye for design and a love for coding, I specialize in building cutting-edge web applications that prioritize reactivity and user-friendliness. Leveraging the latest technologies, my goal is to create an optimal user interface that strikes a delicate balance between aesthetics and functionality. I firmly believe that a truly exceptional UI architecture seamlessly integrates the objectives and requirements of the end-users, resulting in an elegant, efficient, and robust design that enhances the overall user experience.</span>
            <Experience />
            <Contact />
        </div>
    )
}

export default Home