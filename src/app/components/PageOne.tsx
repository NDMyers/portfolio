import { FC } from 'react'
import Typewriter from 'typewriter-effect'
import { AnimatePresence, motion, Variants } from "framer-motion"
import { LucideArrowDown, LucideArrowUp, LucideArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import ProjectDiv from './ProjectDiv'
import SkillsDiv from './SkillsDiv'
import * as Scroll from 'react-scroll'
import Quickview from './Quickview'

interface PageOneProps {

}

const PageOne: FC<PageOneProps> = ({ }) => {

    return (
        <motion.div className='w-full h-screen flex justify-center sm:justify-normal sm:items-start overflow-x-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                ease:"easeIn",
                duration: 0.8,
            }}>
            <div className='pt-8 ml-9 sm:pt-8 sm:ml-8 md:pt-20 md:ml-8 lg:pt-24 lg:ml-20 xl:pt-24 xl:ml-20 flex flex-col max-w-lg'>
                <div className='w-32 h-32 mb-4 ml-24 sm:ml-0'>
                    <Image src='/headshot.jpg' alt='Photo of Nick Myers' className='rounded-full' width={2000} height={2000}/>
                </div>
                <div>
                    <p className='flex text-white text-6xl xl:text-7xl font-bold sm:text-left text-center'>Hi! I'm<br></br>Nick Myers,</p>
                </div>
                <div className='text-slate-300 xl:text-3xl text-2xl font-bold sm:text-left sm:pb-4 pb-0 text-center pt-2 sm:pt-0'>
                    <Typewriter onInit={(typewriter) => {
                        typewriter.pauseFor(1000)
                        typewriter.changeDelay(90)
                        typewriter.typeString('2023 UC Davis New Grad')
                        typewriter.pauseFor(500)
                        typewriter.deleteAll()
                        typewriter.typeString('Bassist and Keyboard Player')
                        typewriter.pauseFor(500)
                        typewriter.deleteAll()
                        typewriter.typeString('Full Stack SWE')
                        typewriter.start()
                    }} />
                </div>

                <div className='flex h-10 w-12 pl-[4.5rem] mt-4 sm:pl-0 sm:mt-0'>
                    <motion.div className='flex mr-4' whileHover={{ scale: 1.4 }}>
                        <Image className='flex mr-12 hover:cursor-pointer' src='/github.png' alt='GitHub logo' height={800} width={800}/>                        
                    </motion.div>

                    <motion.div className='flex mr-4' whileHover={{ scale: 1.4 }}>
                        <Image className='flex mr-12 hover:cursor-pointer' src='/linkedin.png' alt='LinkedIn logo' height={800} width={800} />                       
                    </motion.div>

                    <motion.div className='flex' whileHover={{ scale: 1.4 }}>
                        <Image className='flex mr-14 hover:cursor-pointer' src='/gmail2.png' alt='Gmail logo' height={800} width={800} />                    
                    </motion.div>
                </div>

                <div className='hidden sm:flex lg:pt-8 pt-5'>
                    <p className='text-slate-300 xl:text-xl text-lg tracking-tighter'>I'm a 2023 new graduate with a B.S. in Computer Science with a passion for web development, music, data analysis, and network protocols.</p>
                </div>

                <div className='hidden sm:flex lg:pt-10 pt-5'>
                <p className='text-slate-300 xl:text-xl text-lg tracking-tighter'>In today's market <span className='font-bold text-emerald-700'>time is money</span>, so here are some quick looks at my projects and skills, with more information about them and myself if you desire in the menu directories. </p>
                </div>

                <div className='w-full h-[2px] mt-4 sm:mt-6  bg-emerald-700'>
                    <div className='hidden sm:flex py-8'>
                        <p className='text-slate-600 text-sm'>Coded using Next.js and TailwindCSS, deployed on Vercel</p>
                    </div>
                </div>
                
                <div className='sm:hidden max-w-xs pt-9'>
                    <p className='text-slate-300 text-md text-center tracking-tight'>I'm a 2023 new graduate with a B.S. in Computer Science and a passion for web development, data analysis and network protocols</p>
                </div>

                <div className='sm:hidden max-w-xs pt-9'>
                    <p className='text-slate-300 text-md text-center tracking-tight'>In today's market <span className='font-bold text-emerald-700'>time is money</span>, so are some quick looks at my projects and skills, with more information about them and myself if you desire in the menu directories. </p>
                </div>

                <div className='sm:hidden text-white pt-12 flex justify-center items-center'>
                    <Scroll.Link to='quickview' activeClass='active' duration={500} offset={50} spy={true} smooth={true}>
                        <LucideArrowDown className='mr-5 flex animate-bounce hover:text-emerald-700 hover:cursor-pointer'/>
                    </Scroll.Link>
                </div>
            </div>

            <Quickview />
        </motion.div>

    )
}

export default PageOne