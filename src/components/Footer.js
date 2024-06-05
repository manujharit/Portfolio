import { CDN_URL, LINKEDIN, TWITTER,GITHUB, GMAIL } from '../configs/configs'


const Footer = () => {
    const socials = [
        {id:0, name: 'linkedIn', imageId: 'eub6rgmsq4ngfuw3o9cr.png', link: LINKEDIN },
        {id:1, name: 'Github', imageId: 'zva5tmqwrx2uly42wdrq.png', link: GITHUB },
        {id:2, name: 'Twitter', imageId: 'eep30q9hzpuppql0tleu.png', link: TWITTER },
        {id:3, name: 'Gmail', imageId: 'g0uugaik8vifphs8gq1o.png', link: GMAIL },
    ]
    return (
        <div className=" flex flex-col justify-center items-center my-[10%]">
            <div className='border-b-2 border-gray-300 w-[95%] mb-[5%]'></div>
            <div className='flex flex-row justify-between mx-2 md:mx-[35%] mb-[5%]'>
                {socials.map(social => <a key={social.id} href={social.link} className='w-10 h-10 mx-2 md:w-[15%] md:h-[10%]' target="_blank"><img src={CDN_URL + social.imageId} className='rounded-xl ' /></a>)}
            </div>
            
            <span className='text-gray-700 text-sm'>Developed By Manuj Haritwal</span>
        </div>
    )
}

export default Footer
