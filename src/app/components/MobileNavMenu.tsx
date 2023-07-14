import { FC } from 'react'
import { useState } from "react";
import { animate, motion, Variants } from 'framer-motion'
import { MenuIcon } from 'lucide-react';
import MobileNavItem from './MobileNavItem';

interface MobileNavMenuProps {
  
}

const MobileNavMenu: FC<MobileNavMenuProps> = ({}) => {

    const [isOpen, setIsOpen] = useState(false)

    const itemVariants: Variants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
            display: "flex"
        },
        closed: { 
            opacity: 0, 
            y: 20, 
            transition: { duration: 0.1 } ,
            transitionEnd: {
                display: "none"
            }
        }
    }


    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="sm:hidden flex flex-col items-center pt-3 w-full"
        >
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                className='flex flex-row items-center justify-between p-1 bg-emerald-700 rounded-md w-1/2'
            >
                <MenuIcon className=''/>
                <p className='text-slate-200'>Menu</p>
                <motion.div
                variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
                style={{ originY: 0.55 }}
                >
                <svg width="15" height="15" viewBox="0 0 20 20" className=''>
                    <path d="M0 7 L 20 7 L 10 16" />
                </svg>
                </motion.div>
            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.1,
                            staggerChildren: 0.05
                        },
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3,
                        },
                    },
                }}
                className="bg-emerald-700 w-1/2 flex flex-col items-center mt-2" 
            >
                <MobileNavItem itemVariants={itemVariants} title='Resume' />
                <MobileNavItem itemVariants={itemVariants} title='Home' />
                <MobileNavItem itemVariants={itemVariants} title='Projects' />
                <MobileNavItem itemVariants={itemVariants} title='About' />
                <MobileNavItem itemVariants={itemVariants} title='Contact Me' />
            </motion.ul>
        </motion.nav>
    )
}

export default MobileNavMenu