'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ScrollAnimationsInfoProps {
    text: string
}

const ScrollAnimationsInfo: FC<ScrollAnimationsInfoProps> = ({ text }) => {

    const variants: Variants = {
        offscreen:{
            y: 400,
            visibility: 'hidden'
        },
        onscreen: {
            y: 10,
            visibility: 'visible',
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.2
            }
        }
    }

    return (

        <div className='justify-evenly flex flex-col pt-20 flex-wrap'>

            <motion.div
                className='flex flex-col w-[75vw]'
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div className='flex flex-col font-semibold text-center items-center overflow-hidden' variants={variants}>
                    <Image className='rounded-full' src='/headshot.jpg' width={150} height={150} alt='Photo of Nick Myers' />
                    <motion.button className='flex text-3xl pt-4 hover:text-cyan-400' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href=''>Resume</Link>
                    </motion.button>
                    <div className='flex items-center'>
                        <motion.button className='p-3 hover:text-cyan-400' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href=''>LinkedIn</Link>
                        </motion.button>
                        <p>•</p>
                        <motion.button className='p-3 hover:text-cyan-400' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href=''>GitHub</Link>
                        </motion.button>
                        <p>•</p>
                        <motion.button className='p-3 hover:text-cyan-400' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href=''>Email</Link>
                        </motion.button>
                        <p>•</p>
                        <motion.button className='p-3 hover:text-cyan-400' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Link href=''>909-732-3356</Link>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>            


            {/* <div className=''>
                <motion.div
                    className=''
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div className='flex flex-rowfont-semibold text-center outline-dashed items-center overflow-hidden' variants={variants}>
                            <a className='flex text-white text-3xl font-semibold text-center tracking-tight'>Resume</a>
                            <div className='max-w-xs max-h-10'>
                                <Image className='rounded-full' src='/headshot.jpg' layout='fill' alt='Photo of Nick Myers' />
                            </div>
                            <div className='flex flex-col text-white text-xl'>
                                <a className='flex p-1'>LinkedIn</a>
                                <a className='flex p-1'>Email</a>
                                <a className='flex p-1'>GitHub</a>
                            </div>
                    </motion.div>
                </motion.div>
            </div> */}


            <div>
                <motion.div
                    className=''
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div className='text-3xl text-white font-semibold text-center tracking-tight' variants={variants}>
                            1
                    </motion.div>
                </motion.div>
            </div>


            <div>
                <motion.div
                    className=''
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div className='text-3xl text-white font-semibold text-center tracking-tight' variants={variants}>
                        2
                    </motion.div>
                </motion.div>
            </div>


        </div>

    )

}

export default ScrollAnimationsInfo