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
        <motion.div className='flex flex-col w-auto group p-3 rounded-lg'
            whileHover={{
                scale: 1.1,
                borderRadius: "0.5rem",
                backgroundColor: "rgb(30, 41, 59)"
            }}
        >
            <div className='flex flex-row justify-between items-center flex-wrap'>
                <p className='flex text-slate-100 font-bold xl:text-2xl text-lg group-hover:text-emerald-700'>{title}</p>
            </div>
            <div className='flex text-slate-300 max-w-[20rem] xl:text-md text-sm text-left tracking-tighter leading-tight xl:pt-2 pt-0'>{description}</div>
        </motion.div>
    )
}

export default SkillsDiv