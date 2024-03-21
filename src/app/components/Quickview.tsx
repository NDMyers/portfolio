'use client'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import { FC, useState } from 'react'
import ProjectDiv from './ProjectDiv'
import SkillsDiv from './SkillsDiv'

interface QuickviewProps {
  
}

const Quickview: FC<QuickviewProps> = ({}) => {

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

    <div id='Projects' className='hidden w-full sm:flex flex-col justify-normal items-center flex-wrap py-10'>
        <div className='hidden sm:flex flex-row justify-center w-96 pb-10'>
            <motion.div 
                className={showProjects ? `sm:w-60 md:w-72 xl:w-full xl:h-[90px] bg-slate-400 flex justify-start rounded-[50px] p-3 cursor-pointer` 
                                        : `sm:w-60 md:w-72 xl:w-full xl:h-[90px] bg-slate-400 flex justify-end rounded-[50px] p-3 cursor-pointer` } 
                onClick={()=>setShowProjects(!showProjects)}
                animate={ showProjects ? 'showingProjects' : 'showingSkills'}
                transition={{
                    duration: 0.4,
                    ease: "easeIn"
                }}
                variants={itemVariants}>
                
                <motion.div 
                    className='flex justify-center items-center w-[135px] h-[65px] bg-white rounded-[40px]'
                    whileHover={{ scale: 1.1 }}
                    layout='position'
                    transition={ spring }
                >
                    <div className='flex font-bold text-slate-900'>{showProjects ? 'Show Skills' : 'Show Projects'}</div>
                </motion.div>
            </motion.div>
        </div>

        {showProjects &&
            <div className='flex flex-col w-3/4'>
                
                {/* EXPERIENCE TODO */}

                <div className='flex flex-row flex-wrap justify-evenly'>
                    <ProjectDiv 
                        title='TikTok Tournaments' 
                        description='An interactive web app where users can enter TikTok URLs to compete in a popularity tournament bracket, example tournament included! Users are displayed two videos per bracket and choose their favorite each time. The winning video is then algorithmically calculated and shown to the user. Version control used with Git.'
                        madeWith='Made with: Next.js, TailwindCSS, JavaScript, Redis Database' 
                        imageSrc='/tt.png'
                        demoURL='https://tiktoktourneys.vercel.app'
                        codeURL='https://github.com/NDMyers/tiktok-tournaments'
                        hasDemo={true}
                    />
                    <ProjectDiv 
                        title='Pickle Pals' 
                        description='Real time chatting web app featuring friend requests and chatting that utilizes google login for authentication. Once authenticated for path/route protection, the user can then add or deny friends and begin chatting with them. Version control used with Git.'
                        madeWith='Made with: Next.js, TailwindCSS, TypeScript, Redis Database'
                        imageSrc='/picklepals.png'
                        demoURL='https://picklepals.vercel.app'
                        codeURL='https://github.com/NDMyers/picklepals'
                        hasDemo={true}
                    />
                    <ProjectDiv 
                        title='Client-server Architecture with TCP Tahoe/Reno' 
                        description='A Pythonic recreation of industry standard TCP networking protocols using client-server interactions, self-made congestion control, sockets, and data packet formatting. Creates a graphical representation of data flow in relation to CWND per transmission round.' 
                        madeWith='Made with: Python'
                        imageSrc='/renoAlice.png'
                        demoURL=''
                        codeURL='https://github.com/NDMyers/academic-projects/tree/main/tcp-project'
                        hasDemo={false}
                    />
                    <ProjectDiv 
                        title='User Dictionary' 
                        description='An Android app that allows users to quickly create and edit their own minimalistic dictionary of custom words and definitions for injokes and more. Animations and fail-safe messages included for user clarity as they create or edit their content.' 
                        madeWith='Made with: Kotlin, Android Studio'
                        imageSrc='/dict.png'
                        demoURL=''
                        codeURL='https://github.com/NDMyers/user-dictionary/tree/main'
                        hasDemo={false}
                    />
                    <ProjectDiv 
                        title='Audio Equalizer Plugin' 
                        description='An aesthetically pleasing equalizer plugin that takes in audio files and allows for seamless user manipulation of its sound waves. Users can input a song or audio file and see real time sound wave manipulation correlating to what they hear for instant feedback from the adjustive knobs and buttons.' 
                        madeWith='Made with: C++, JUCE Framework'
                        imageSrc='/simpleEQ.png'
                        demoURL=''
                        codeURL='https://github.com/NDMyers/SimpleEQ'
                        hasDemo={false}
                    />
                </div>
            </div>
        }


        {!showProjects &&
        <div className='hidden sm:flex flex-col justify-evenly items-center w-3/4 flex-wrap max-w-3xl'>
            <div className='flex flex-col flex-wrap p-6'>
                <p className='text-violet-400 font-bold text-4xl pb-4 text-center'>Languages</p>
                <div className='flex flex-row flex-wrap justify-center bg-slate-800 rounded-xl p-2'>
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
            <div className='flex flex-col flex-wrap p-6'>
                <p className='text-violet-400 font-bold text-4xl pb-4 text-center'>Frameworks / Databases</p>
                <div className='flex flex-row flex-wrap justify-center bg-slate-800 rounded-xl p-2'>
                    <SkillsDiv title='React' description='' />
                    <SkillsDiv title='Next.js' description=''/>
                    <SkillsDiv title='Node.js' description='' />
                    <SkillsDiv title='JUCE' description='' />
                    <SkillsDiv title='Redis' description=''/>
                    <SkillsDiv title='SQLite' description='' />

                </div>
            </div>
            <div className='flex flex-col flex-wrap p-6'>
                <p className='text-violet-400 font-bold text-4xl pb-4 text-center'>Developer Tools</p>
                <div className='flex flex-row flex-wrap justify-center bg-slate-800 rounded-xl p-2'>
                    <SkillsDiv title='Git' description='' />
                    <SkillsDiv title='VS Code' description=''/>
                    <SkillsDiv title='GitHub' description='' />
                    <SkillsDiv title='WSL' description='' />
                    <SkillsDiv title='Ubuntu' description=''/>
                    <SkillsDiv title='Linux' description='' />
                </div>
            </div>
        </div> }

        {/* <div className='w-[80%] h-[2px] mt-10  bg-emerald-700'>
            <div className='hidden sm:flex py-8 justify-between'>
                <p className='text-slate-600 text-sm'>Coded using Next.js and TailwindCSS, deployed on Vercel</p>
                <p className='text-slate-600 text-sm'>© 2023 Nick Myers</p>
            </div>
        </div> */}

    </div>

    )
}

export default Quickview