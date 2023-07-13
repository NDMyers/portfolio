import { FC } from 'react'
import { motion } from 'framer-motion'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface NavBarItemProps {
    title: string
    isResume: boolean
}

const NavBarItem: FC<NavBarItemProps> = ({ title, isResume }) => {

    return (
        <motion.div className='flex justify-center items-center w-[20%] h-[80%] text-white group'
            whileHover={{
                scale: 1.1,
                cursor: "pointer",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(30, 41, 59)"
            }}
        >
            <Link href={ isResume ? `https://drive.google.com/file/d/1qq0Ugv_BOCqdK1ZLcVStps-aI0Zxis03/view?usp=sharing` : `/${title.toLowerCase()}`}>
                <p className='flex text-white lg:text-lg text-center text-sm group-hover:text-emerald-700'>{title}</p>
            </Link>
        </motion.div>
    )
}

export default NavBarItem