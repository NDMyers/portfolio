import { GithubIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideLinkedin, LucideMail } from 'lucide-react'
import { FC } from 'react'
import * as Scroll from 'react-scroll'

interface PageTwoProps {
  
}

const PageTwo: FC<PageTwoProps> = ({}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>

        {/* contact me section  */}
        <div className='flex flex-col w-1/2'>
            <p className='font-bold text-white text-2xl text-center'>Contact Me</p>
            <div className='flex flex-row flex-wrap justify-evenly pt-4'>
                <div className='flex flex-col justify-center items-center w-52 h-40 bg-slate-800 rounded-md'>
                    <LucideMail className='w-1/2 h-1/2 mb-2 text-blue-500 fill-white'/>
                    <p className='text-slate-300 font-semibold text-lg'>Email</p>
                </div>
                <div className='flex flex-col justify-center items-center w-52 h-40 bg-slate-800 rounded-md'>
                    <LinkedinIcon className='w-1/2 h-1/2 mb-2 text-transparent bg-blue-500 rounded-md fill-white' />
                    <p className='text-slate-300 font-semibold text-lg'>LinkedIn</p>
                </div>
                <div className='flex flex-col justify-center items-center w-52 h-40 bg-slate-800 rounded-md'>
                    <GithubIcon className='w-1/2 h-1/2 mb-2 text-transparent bg-blue-500 rounded-full fill-white'/>
                    <p className='text-slate-300 font-semibold text-lg'>GitHub</p>
                </div>
            </div>
        </div>

        <div className='w-[80%] h-[2px] mt-10  bg-emerald-700'>
            <div className='hidden sm:flex py-8 justify-between'>
                <p className='text-slate-600 text-sm'>Coded using Next.js and TailwindCSS, deployed on Vercel</p>
                <p className='text-slate-600 text-sm'>© 2023 Nick Myers</p>
            </div>
        </div>
    </div>
  )
}

export default PageTwo