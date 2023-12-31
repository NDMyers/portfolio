import { FC } from 'react'
import { motion } from 'framer-motion'
import { LucideArrowUpRight } from 'lucide-react'

interface DetailedProjectsDivProps {
    title: string
    description: string
    link: string
    tech: string[]
}

const DetailedProjectsDiv: FC<DetailedProjectsDivProps> = ({ title, description, link, tech }) => {

    const insertDiv = ( tech : string[] ) => {
        for( let i = 0; i <= tech.length; i++ ) {
            return (
                <div>
                    {tech[i]}
                </div>
            )
        }
    }

    return (
        <motion.div className='flex flex-col w-auto h-40 group p-3 rounded-lg'
            whileHover={{
                scale: 1.04,
                cursor: "pointer",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(30, 41, 59)"
            }}
        >
            <div className='flex flex-row justify-between items-center'>
                <p className='flex text-slate-100 font-bold xl:text-2xl text-lg group-hover:text-emerald-700 hover:cursor-pointer'>{title}</p>
                <LucideArrowUpRight className='text-white group-hover:text-emerald-700' />
            </div>
            <div className='flex text-slate-300 max-w-[20rem] xl:text-md text-sm text-left tracking-tighter leading-tight xl:pt-2 pt-0'>{description}</div>
        </motion.div>
    )
}

export default DetailedProjectsDiv