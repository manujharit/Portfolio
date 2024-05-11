import LINKS from '../content/links'
import useScreenSize from '../hooks/useScreenSize'
const { LINKEDIN, GITHUB, TWITTER } = LINKS
const Socials = () => {
    const isnotMobileorTablet = useScreenSize()

    return (
        <div className='fixed z-10 lg:top-1/3 bottom-0 flex items-center lg:bottom-1/3 lg:left-0 lg:h-1/3 h-[7%] lg:w-16 w-[100%] text-gray-400 lg:border-e-4 border-t-4 lg:border-y-4 border-solid border-teal-500  lg:rounded-e-xl  bg-slate-900'>
            <div className='flex lg:flex-col flex-row lg:space-y-[170%] items-center justify-between w-[100%] py-2 px-4'>
                {!isnotMobileorTablet && (<span className='lg:hidden block text-lg text-white font-bold w-[50%]'>MANUJ HARITWAL</span>)}
                <a className="block hover:text-white mr-4" href={GITHUB} target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub"><span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-8 w-8" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                <a className="block hover:text-white mr-4" href={LINKEDIN} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a>
                <a className="block hover:text-white mr-4" href={TWITTER} target="_blank" rel="noreferrer noopener" aria-label="Twitter (opens in a new tab)" title="Twitter"><span className="sr-only">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" class="h-6 w-6" aria-hidden="true"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path></svg></a>

            </div>
        </div>
    )
}

export default Socials