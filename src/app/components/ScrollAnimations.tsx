'use client'

import { motion, Variants } from 'framer-motion'
import { FC } from 'react'

interface ScrollAnimationsProps {
    text: string
    description: string
}

const ScrollAnimations: FC<ScrollAnimationsProps> = ({ text, description }) => {

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
        <motion.div
            className=''
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className='sm:text-3xl text-xl text-white font-semibold text-center outline-dashed tracking-tight' variants={variants}>
                <motion.button className='hover:text-cyan-400 hover:cursor-pointer' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    {text}
                </motion.button>
                <div className='bg-slate-600 sm:text-xl text-lg font-thin rounded-lg sm:p-3 p-1'>{description}</div>
            </motion.div>
        </motion.div>
    )

}

export default ScrollAnimations