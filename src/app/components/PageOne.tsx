import { FC, useCallback } from 'react'
import Typewriter from 'typewriter-effect'
import { AnimatePresence, motion, Variants } from "framer-motion"
import { LucideArrowDown, LucideArrowUp, LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ProjectDiv from './ProjectDiv'
import SkillsDiv from './SkillsDiv'
import * as Scroll from 'react-scroll'
import Quickview from './Quickview'
import NavBar from './NavBar'
import ParticlesComponent from './ParticlesComponent'

interface PageOneProps {

}

const PageOne: FC<PageOneProps> = ({ }) => {


    return (
        <motion.div className='w-full bg-slate-900 overflow-x-hidden'
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                ease:"easeIn",
                duration: 0.8,
            }}>

            {/* <NavBar pageName='Home' /> */}

            <div className='flex flex-col w-full justify-center px-6 relative'>
                <div className='flex w-screen h-screen absolute z-0 justify-center'>
                    <ParticlesComponent />
                </div>
                <div className='flex flex-col justify-start items-center flex-1 pt-24 z-10'>
                    <div className='mb-4 w-40 h-40 mr-2'>
                        <Image src='/headshot.jpg' alt='Photo of Nick Myers' className='rounded-full' width={2000} height={2000}/>
                    </div>
                    <div>
                        <p className='text-white text-6xl xl:text-7xl font-bold text-center'><span className='text-emerald-500'>Hi!</span> I'm<br></br>Nick Myers,</p>
                    </div>
                    <div className='text-slate-300 xl:text-3xl text-2xl font-bold sm:text-left sm:pb-4 pb-0 text-center pt-2 sm:pt-0'>
                        <Typewriter onInit={(typewriter) => {
                            typewriter.pauseFor(1000)
                            typewriter.changeDelay(90)
                            typewriter.typeString('2023 UC Davis New Grad')
                            typewriter.pauseFor(400)
                            typewriter.deleteAll()
                            typewriter.typeString('Bassist and Keyboard Player')
                            typewriter.pauseFor(400)
                            typewriter.deleteAll()
                            typewriter.typeString('Full Stack SWE')
                            typewriter.start()
                        }} />
                    </div>

                    <div className='flex justify-center h-10 w-12 mt-4 sm:mt-0'>
                        <motion.a className='flex mr-4' whileHover={{ scale: 1.4 }} href='https://github.com/NDMyers'>
                            <Image className='flex mr-12 hover:cursor-pointer' src='/github.png' alt='GitHub logo' height={800} width={800}/>                        
                        </motion.a>

                        <motion.a className='flex mr-4' whileHover={{ scale: 1.4 }} href='https://www.linkedin.com/in/nicholas-myers-b87244246/'>
                            <Image className='flex mr-12 hover:cursor-pointer' src='/linkedin.png' alt='LinkedIn logo' height={800} width={800} />                       
                        </motion.a>

                        <motion.a className='flex' whileHover={{ scale: 1.4 }} href='mailto:ndmyers@ucdavis.edu'>
                            <Image className='flex mr-14 hover:cursor-pointer' src='/gmail2.png' alt='Gmail logo' height={800} width={800} />                    
                        </motion.a>
                    </div>

                    <div className='flex lg:pt-8 pt-5 max-w-xs sm:max-w-lg'>
                        <p className='text-slate-300 xl:text-xl text-lg text-center tracking-tighter'>I'm a 2023 new graduate with a B.S. in Computer Science with a passion for web development, music, databases, and network protocols.</p>
                    </div>

                    <div className='flex lg:pt-10 pt-5 max-w-xs sm:max-w-lg pb-10'>
                    <p className='text-slate-300 xl:text-xl text-lg text-center tracking-tighter'>Excited to and comfortable with tackling new and diverse problems and to contribute to the overall cooperative success of any team. </p>
                    </div>

                </div>
            </div>
        </motion.div>

    )
}

export default PageOne