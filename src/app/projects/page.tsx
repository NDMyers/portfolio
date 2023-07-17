'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import DetailedProjectsDiv from '../components/DetailedProjectsDiv'
import MobileNavMenu from '../components/MobileNavMenu'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
    return (
        <div className='w-full h-screen flex flex-col items-center sm:justify-between' >
            <MobileNavMenu />
            <NavBar pageName='Projects' />
            <motion.div className='w-3/4 h-3/4 flex flex-col bg-slate-500 rounded-lg sm:mb-14 mt-16 sm:pt-0'>
                <DetailedProjectsDiv title='TikTok Tournaments' description='dsad' link='dsa' tech={['Next.js', 'TailwindCSS', 'mungo']}/>
                <DetailedProjectsDiv title='TikTok Tournaments' description='dsad' link='dsa' tech={['Next.js', 'TailwindCSS', 'mungo']}/>
                <DetailedProjectsDiv title='TikTok Tournaments' description='dsad' link='dsa' tech={['Next.js', 'TailwindCSS', 'mungo']}/>
                <DetailedProjectsDiv title='TikTok Tournaments' description='dsad' link='dsa' tech={['Next.js', 'TailwindCSS', 'mungo']}/>
                <DetailedProjectsDiv title='TikTok Tournaments' description='dsad' link='dsa' tech={['Next.js', 'TailwindCSS', 'mungo']}/>

            </motion.div>
        </div>
    )
}

export default page