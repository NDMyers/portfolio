import { FC } from 'react'
import { motion } from 'framer-motion'
import { LucideArrowUpRight } from 'lucide-react'
import Image from 'next/image'

interface SkillsDivProps {
    title: string
    description: string
}

const SkillsDiv: FC<SkillsDivProps> = ({ title, description }) => {
    return (

        <motion.div className='w-auto h-auto flex flex-col group rounded-lg border-slate-800'
            whileHover={{
                scale: 1.02,
                borderRadius: "0.5rem",
            }}
        >
            <div className='flex flex-row justify-between items-center p-2 px-5'>
                <p className='flex text-slate-100 text-xl sm:text-2xl 2xl:text-3xl group-hover:text-emerald-700 group-hover:cursor-default'>{title}</p>
            </div>
            <div className='flex text-slate-400 text-md sm:text-xl 2xl:text-2xl text-left tracking-tighter leading-tight xl:pt-2 p-2'>{description}</div>
        </motion.div>
    )
}

export default SkillsDiv