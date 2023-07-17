import { FC } from 'react'
import { motion } from 'framer-motion'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ProjectDivProps {
    title: string
    description: string
}

const ProjectDiv: FC<ProjectDivProps> = ({ title, description }) => {
    return (
        <Link href='https://www.google.com' className='w-[70%] h-auto flex flex-col group rounded-lg border-slate-800' >
        <motion.div className=''
            whileHover={{
                scale: 1.08,
                cursor: "pointer",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(30, 41, 59)"
            }}
        >
            <div className='flex flex-row justify-between items-center p-2'>
                <p className='flex text-slate-100 font-bold text-xl sm:text-2xl 2xl:text-4xl group-hover:text-emerald-700 hover:cursor-pointer'>{title}</p>
                <LucideArrowUpRight className='text-white group-hover:text-emerald-700' />
            </div>
            <div className='flex text-slate-400 text-md sm:text-xl 2xl:text-2xl text-left tracking-tighter leading-tight xl:pt-2 pt-0 p-2'>{description}</div>
        </motion.div>
        </Link>
    )
}

export default ProjectDiv