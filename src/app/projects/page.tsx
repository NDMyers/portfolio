'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import DetailedProjectsDiv from '../components/DetailedProjectsDiv'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
    return (
        <div className='w-full h-screen flex justify-normal items-start'>
            <NavBar />
            <motion.div className='w-full h-3/4 flex bg-slate-500 mt-36'>
                <DetailedProjectsDiv title='TikTok Tournaments' description='dsad' link='dsa' tech={['Next.js', 'TailwindCSS', 'mungo']}/>
            </motion.div>
        </div>
    )
}

export default page