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

const PageOne: FC<PageOneProps> = ({}) => {

    return (
        <div className='w-full h-screen flex justify-center sm:justify-normal sm:items-start overflow-x-hidden'>
            <div className='pt-14 sm:pt-8 sm:ml-8 md:pt-20 md:ml-8 lg:pt-24 lg:ml-20 xl:pt-24 xl:ml-20 flex flex-col max-w-lg'>
                <motion.div
                    className='w-32 h-32 mb-4 ml-24 sm:ml-0'
                    initial= {{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.8,
                        delay: 0
                    }}>
                    <Image src='/headshot.jpg' alt='Photo of Nick Myers' className='rounded-full' width={2000} height={2000}/>
                </motion.div>
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration:1 }}>
                    <p className='flex text-white text-6xl xl:text-7xl font-bold sm:text-left text-center'>Hi! I'm<br></br>Nick Myers,</p>
                </motion.div>
                <motion.div className='text-slate-300 xl:text-3xl text-2xl font-bold sm:text-left sm:pb-4 pb-0 text-center pt-2 sm:pt-0'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ 
                        duration: 1,
                        delay: 0.7
                    }}>
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
                </motion.div>

                <motion.div className='flex h-10 w-12 pl-[4.5rem] mt-4 sm:pl-0 sm:mt-0'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                >
                    <motion.div className='flex mr-4' whileHover={{ scale: 1.4 }}>
                        <Image className='flex mr-12 hover:cursor-pointer' src='/github.png' alt='GitHub logo' height={800} width={800}/>                        
                    </motion.div>

                    <motion.div className='flex mr-4' whileHover={{ scale: 1.4 }}>
                        <Image className='flex mr-12 hover:cursor-pointer' src='/linkedin.png' alt='LinkedIn logo' height={800} width={800} />                       
                    </motion.div>

                    <motion.div className='flex' whileHover={{ scale: 1.4 }}>
                        <Image className='flex mr-14 hover:cursor-pointer' src='/gmail2.png' alt='Gmail logo' height={800} width={800} />                    
                    </motion.div>

                </motion.div>

                <motion.div className='hidden sm:flex lg:pt-8 pt-5'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                >
                    <p className='text-slate-300 xl:text-xl text-lg tracking-tighter'>I'm a 2023 new graduate with a B.S. in Computer Science with a passion for web development, music, data analysis, and network protocols.</p>
                </motion.div>

                <motion.div className='hidden sm:flex lg:pt-10 pt-5'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                >
                <p className='text-slate-300 xl:text-xl text-lg tracking-tighter'>In today's market <span className='font-bold text-emerald-700'>time is money</span>, so here are some quick looks at my projects and skills, with more information about them and myself if you desire in the menu directories. </p>
                </motion.div>

                <motion.div className='w-full h-[2px] mt-4 sm:mt-6  bg-emerald-700'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                >
                    <div className='hidden sm:flex py-8'>
                        <p className='text-slate-600 text-sm'>Coded using Next.js and TailwindCSS, deployed on Vercel</p>
                    </div>
                </motion.div>
                
                <motion.div className='sm:hidden max-w-xs pt-9'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                >
                    <p className='text-slate-300 text-md text-center tracking-tight'>I'm a 2023 new graduate with a B.S. in Computer Science and a passion for web development, data analysis and network protocols</p>
                </motion.div>

                <motion.div className='sm:hidden max-w-xs pt-9'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                >
                    <p className='text-slate-300 text-md text-center tracking-tight'>In today's market <span className='font-bold text-emerald-700'>time is money</span>, so are some quick looks at my projects and skills, with more information about them and myself if you desire in the menu directories. </p>
                </motion.div>

                <motion.div className='sm:hidden text-white pt-12 flex justify-center items-center'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                >
                    <Scroll.Link to='quickview' activeClass='active' duration={500} offset={50} spy={true} smooth={true}>
                        <LucideArrowDown className='flex animate-bounce hover:text-emerald-700 hover:cursor-pointer'/>
                    </Scroll.Link>
                </motion.div>
            </div>

            <Quickview />
        </div>

    )
}

export default PageOne