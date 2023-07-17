'use client'
import { FC, useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import ProjectDiv from './ProjectDiv'
import SkillsDiv from './SkillsDiv'

interface MobileQuickViewProps {
  
}

const MobileQuickView: FC<MobileQuickViewProps> = ({}) => {

    const [showProjects, setShowProjects] = useState(true)

    const itemVariants: Variants = {
        showingProjects: {
            backgroundColor: "rgb(52, 211, 153)",
        },
        showingSkills: {
            backgroundColor: "rgb(167, 139, 250)"
        }
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 80
    }

    return (

        <motion.div id='quickview' className='sm:hidden flex flex-col justify-center items-center w-full h-screen flex-wrap'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.5
                }}>

                <motion.div className='flex flex-row justify-center w-96'>
                    <motion.div 
                        className={showProjects ? `w-3/4 h-full bg-slate-400 flex justify-start rounded-[50px] p-3 cursor-pointer` 
                                                : `w-3/4 h-full bg-slate-400 flex justify-end rounded-[50px] p-3 cursor-pointer` } 
                        onClick={()=>setShowProjects(!showProjects)}
                        initial={ false }
                        animate={ showProjects ? 'showingProjects' : 'showingSkills'}
                        transition={{
                            duration: 0.4,
                            ease: "easeIn"
                        }}
                        variants={itemVariants}>
                        
                        <motion.div 
                            className='flex justify-center items-center w-[135px] h-[65px] bg-white rounded-[40px]'
                            whileHover={{ scale: 1.1 }}
                            layout
                            transition={ spring }
                        >
                            <div className='flex font-bold text-slate-900'>{showProjects ? 'Show Skills' : 'Show Projects'}</div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {showProjects &&
                    <motion.div className='flex flex-row justify-evenly items-center h-3/4 flex-wrap overflow-y-auto overflow-x-hidden'
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                    >
                        <ProjectDiv title='TikTok Tournaments' description='An interactive web app where users can enter TikTok URLs to compete in a popularity tournament bracket, example tournament included!' />
                        <ProjectDiv title='Picklepals' description='Real time chatting web app featuring friend requests and chatting that utilizes google login for authentication'/>
                        <ProjectDiv title='My TCP Tahoe/Reno' description='A Pythonic recreation of industry standard TCP networking protocols using client-server interactions, self-made congestion control, sockets, and data packet formatting' />
                        <ProjectDiv title='User Dictionary' description='An Android app that allows users to quickly create and edit their own minimalistic dictionary of custom words and definitions for injokes and more' />
                        <ProjectDiv title='Audio Equalizer Plugin' description='An aesthetically pleasing equalizer plugin that takes in audio files and allows for seamless user manipulation of its sound waves' />
                    </motion.div> }

                    {/* {!showProjects &&
                    <motion.div className='flex flex-row h-3/4 w-5/6 justify-between flex-wrap overflow-y-auto overflow-x-hidden'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='flex flex-col pt-2'>
                            <p className='flex text-violet-400 font-bold text-3xl'>Frontend</p>
                            <SkillsDiv title='Next.js' description=''/>   
                            <SkillsDiv title='JavaScript' description=''/> 
                            <SkillsDiv title='TypeScript' description=''/>    
                            <SkillsDiv title='HTML/CSS' description=''/>      
                            <SkillsDiv title='React' description=''/>
                            <SkillsDiv title='Node.js' description=''/>            
                        </div>
                        <div className='flex flex-col pt-2'>
                            <p className='flex text-violet-400 font-bold text-3xl'>Backend</p>
                            <SkillsDiv title='C++' description=''/>   
                            <SkillsDiv title='Python' description=''/> 
                            <SkillsDiv title='SQLite Database' description=''/>       
                            <SkillsDiv title='Redis Database' description=''/>  
                            <SkillsDiv title='Kotlin' description=''/>  
                            <SkillsDiv title='JUCE Framework' description=''/>           
                        </div>
                        <div className='flex flex-col pt-2'>
                            <p className='flex text-violet-400 font-bold text-3xl'>Dev tools</p>
                            <SkillsDiv title='VSCode' description=''/>    
                            <SkillsDiv title='Ubuntu/Linux' description=''/>       
                            <SkillsDiv title='GitHub/Git' description=''/> 
                            <SkillsDiv title='LiveShare' description=''/>       
                        </div>

                    </motion.div>} */}

                    {!showProjects &&
                        <div className='flex flex-col justify-evenly items-start h-3/4 w-3/4 flex-wrap overflow-y-auto overflow-x-hidden max-w-3xl'>
                            <div className='flex flex-col flex-wrap'>
                                <p className='text-violet-400 font-bold text-4xl pb-4 text-center'>Languages</p>
                                <div className='flex flex-row flex-wrap justify-center bg-slate-800 rounded-xl p-4'>
                                    <SkillsDiv title='C++' description='' />
                                    <SkillsDiv title='Python' description=''/>
                                    <SkillsDiv title='JavaScript' description='' />
                                    <SkillsDiv title='TypeScript' description='' />
                                    <SkillsDiv title='Java' description=''/>
                                    <SkillsDiv title='Kotlin' description='' />
                                    <SkillsDiv title='HTML' description='' />
                                    <SkillsDiv title='CSS' description=''/>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-violet-400 font-bold text-4xl pb-4 text-center'>Frameworks / Databases</p>
                                <div className='flex flex-row flex-wrap justify-center bg-slate-800 rounded-xl p-4'>
                                    <SkillsDiv title='React' description='' />
                                    <SkillsDiv title='Next.js' description=''/>
                                    <SkillsDiv title='Node.js' description='' />
                                    <SkillsDiv title='JUCE' description='' />
                                    <SkillsDiv title='Redis' description=''/>
                                    <SkillsDiv title='SQLite' description='' />

                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-violet-400 font-bold text-4xl pb-4 text-center'>Developer Tools</p>
                                <div className='flex flex-row flex-wrap justify-center bg-slate-800 rounded-xl p-4'>
                                    <SkillsDiv title='Git' description='' />
                                    <SkillsDiv title='VS Code' description=''/>
                                    <SkillsDiv title='GitHub' description='' />
                                    <SkillsDiv title='WSL' description='' />
                                    <SkillsDiv title='Ubuntu' description=''/>
                                    <SkillsDiv title='Linux' description='' />
                                </div>
                            </div>
                        </div> }

                        <div className='w-[80%] h-[2px] mt-10  bg-emerald-700'>
                            <div className='flexw py-8 justify-between'>
                                <p className='text-slate-600 text-sm'>Coded using Next.js and TailwindCSS, deployed on Vercel</p>
                                <p className='text-slate-600 text-sm'>© 2023 Nick Myers</p>
                            </div>
                        </div>

                </AnimatePresence>
            </motion.div>
    )
}

export default MobileQuickView