import { FC } from 'react'
import { motion } from 'framer-motion'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface NavBarItemProps {
    title: string
    isResume: boolean
}

const NavBarItem: FC<NavBarItemProps> = ({ title, isResume }) => {

    const notInHomePage = title ==='Home'
    if( notInHomePage ) {
        title = '/'
    }

    return (
        <Link href={ isResume ? `https://drive.google.com/file/d/1qq0Ugv_BOCqdK1ZLcVStps-aI0Zxis03/view?usp=sharing` : `/${title.toLowerCase()}`}
            className='w-[20%] h-[80%] group'>
            <motion.div className='flex justify-center items-center w-full h-full text-white group'
                whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(30, 41, 59)"
                }}
            >
            <p className='flex text-white lg:text-lg text-center text-sm group-hover:text-emerald-700'>{notInHomePage ? 'Home' : title}</p>
            </motion.div>
        </Link>
    )
}

export default NavBarItem