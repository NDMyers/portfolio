import { GithubIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideLinkedin, LucideMail, Phone, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import * as Scroll from 'react-scroll'
import { motion } from 'framer-motion'

interface PageTwoProps {
  
}

const PageTwo: FC<PageTwoProps> = ({}) => (
    <div className='w-full flex flex-col justify-center items-center mt-4'>

        {/* Education section */}
        <div id='Education' className='flex flex-col w-[400px] h-[400px]'>
            <p className='font-bold text-white text-4xl text-center pb-4'>My Education</p>
            <div className='flex flex-col flex-wrap justify-evenly items-center p-4 bg-slate-800 rounded-md'>
                <div className='flex w-44 h-44'>
                    <Image src='/UCD2.png' width={400} height={400} alt='UC Davis Logo' />
                </div>
                <div className='text-slate-300 font-semibold text-lg text-center pt-4'>
                    <ul>
                        <li className=''>University of California - Davis</li>
                        <li className='pt-3'>2023 Bachelor's of Science in Computer Science</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* contact me section  */}
        <div id='Contact Me' className='flex flex-col w-1/2 mt-16'>
            <p className='font-bold text-white sm:text-4xl text-2xl text-center'>Contact Me</p>
            <div className='flex flex-row flex-wrap justify-evenly pt-4'>
                <motion.a 
                    className='flex flex-col justify-center items-center w-52 h-40 bg-slate-800 rounded-md m-4'
                    whileHover={{ scale: 1.06 }}
                    href=''
                >   
                        <LucideMail className='w-1/2 h-1/2 mb-2 text-blue-500 fill-white' />
                        <p className='text-slate-300 font-semibold text-md'>ndmyers@ucdavis.edu</p>
                </motion.a>
                <motion.a 
                    className='flex flex-col justify-center items-center w-52 h-40 bg-slate-800 rounded-md m-4'
                    whileHover={{ scale: 1.06 }}
                    href='tel:9097323356'
                    >
                        <Phone className='w-1/2 h-1/2 mb-2 text-transparent bg-blue-500 rounded-full fill-white' />
                        <p className='text-slate-300 font-semibold text-lg'>909-732-3356</p>
                </motion.a>
                <motion.a 
                    className='flex flex-col justify-center items-center w-52 h-40 bg-slate-800 rounded-md m-4'
                    whileHover={{ scale: 1.06 }}
                    href='https://www.linkedin.com/in/nicholas-myers-b87244246/'>
                        <LinkedinIcon className='w-1/2 h-1/2 mb-2 text-transparent bg-blue-500 rounded-md fill-white' />
                        <p className='text-slate-300 font-semibold text-lg'>LinkedIn</p>
                </motion.a>
                <motion.a 
                    className='flex flex-col justify-center items-center w-52 h-40 bg-slate-800 rounded-md m-4'
                    whileHover={{ scale: 1.06 }}
                    href='https://github.com/NDMyers'
                    >
                        <GithubIcon className='w-1/2 h-1/2 mb-2 text-transparent bg-blue-500 rounded-full fill-white' />
                        <p className='text-slate-300 font-semibold text-lg'>GitHub</p>
                </motion.a>
            </div>
        </div>

        {/* Footer */}
        <div className='w-[80%] h-[2px] mt-10 bg-emerald-700'>
            <div className='flex py-8 justify-between'>
                <p className='text-slate-600 text-sm'>Coded using Next.js and TailwindCSS, deployed on Vercel</p>
                <p className='text-slate-600 text-sm'>© 2023 Nick Myers</p>
            </div>
        </div>
    </div>
)

export default PageTwo