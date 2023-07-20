import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LucideArrowUpRight, Play, PlayIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectDivProps {
    title: string
    madeWith: string
    description: string
    imageSrc: string
    demoURL: string
    codeURL: string
}

const ProjectDiv: FC<ProjectDivProps> = ({ title, madeWith, description, imageSrc, demoURL, codeURL }) => {

    const [hasDemo, setHasDemo] = useState<Boolean>(true)
    const [hasCode, setHasCode] = useState<Boolean>(true)

    useEffect(() => {
        if( demoURL === '' ) {
            setHasDemo(false)
        }
    })

    return (
        // <Link href='https://www.google.com' className='w-[70%] flex flex-col group rounded-lg border-slate-800' >
        //     <motion.div className='p-4'
        //         whileHover={{
        //             scale: 1.04,
        //             cursor: "pointer",
        //             borderRadius: "0.5rem",
        //             backgroundColor: "rgb(30, 41, 59)"
        //         }}
        //     >
        //         <div className='flex flex-row justify-between items-center p-2'>
        //             <p className='flex text-slate-100 font-bold text-xl sm:text-2xl 2xl:text-4xl group-hover:text-emerald-700 hover:cursor-pointer'>{title}</p>
        //             <LucideArrowUpRight className='text-white group-hover:text-emerald-700' />
        //         </div>
        //         <div className='flex text-slate-400 text-md sm:text-xl 2xl:text-2xl text-left tracking-tighter leading-tight xl:pt-2 pt-0 p-2'>{description}</div>
        //     </motion.div>
        // </Link>

        <motion.div
            className='w-[420px] h-[950px] sm:w-[700px] sm:h-[950px] lg:w-[700px] lg:h-[700px] rounded-xl bg-slate-800 flex flex-col flex-wrap justify-normal items-center m-8'
        >
            <div className='w-full h-1/2 flex justify-center bg-slate-900 rounded-xl'>
                <Image className='flex w-full rounded-t-xl' src={imageSrc} alt='Project Screenshot' width={800} height={2000} />
            </div>  

            <div className='w-full h-1/2 flex flex-col justify-between items-center'>
                <div className='flex flex-col flex-wrap pt-4 p-6'>
                    <p className='font-semibold text-emerald-500 text-3xl text-center'>{title}</p>
                    <p className='text-lg text-zinc-400 text-center pt-2'>{madeWith}</p>
                    <p className='font-light text-xl text-slate-200 text-left tracking-tight pt-4'>{description}</p>
                </div>
                <div className='flex flex-row flex-wrap '>
                    {hasDemo && 
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link href={demoURL} className='flex flex-row flex-wrap justify-evenly items-center w-32 h-10 bg-blue-500 rounded-full m-4'>
                                <Play className='text-slate-200 fill-slate-200'/>
                                <p className='text-slate-200 font-bold text-sm text-center'>Demo</p>
                            </Link>
                        </motion.div>
                    }   

                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link href={codeURL} className='flex flex-row flex-wrap justify-evenly items-center w-32 h-10 bg-blue-500 rounded-full m-4'>
                            <GithubIcon className='text-slate-200 fill-slate-200'/>
                            <p className='text-slate-200 font-bold text-sm text-center'>Code</p>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectDiv