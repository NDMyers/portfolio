'use client'
import { FC, useEffect, useState } from 'react'
import { motion, Variants } from "framer-motion"
import NavBarItem from './NavBarItem';
import { usePathname } from 'next/navigation'
import ParticlesComponent from './ParticlesComponent';

interface NavBarProps {
    pageName: string
}

const NavBar: FC<NavBarProps> = ({ pageName }) => {

    const [prevScrollPos, setPrevScrollPos] = useState(-1);
    const [visible, setVisible] = useState(true)
    const [isHiding, setIsHiding] = useState(false)

    const scrollHandler = () => {
        const currentScrollPos = window.scrollY

        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler)
    })

    const itemVariants: Variants = {
        showingNav: {
            opacity: 1,
            // transitionEnd: {
            //     display: "block"
            // }
        },
        hidingNav: {
            opacity: 0,
            // transitionEnd: {
            //     display: "none"
            // }
        }
    }

    const pathname = usePathname()

    return (
        <div>
            <motion.div className='z-20 hidden sm:flex flex-row fixed items-center w-full h-16 pt-1 justify-evenly bg-slate-900 border-emerald-700'
                // initial={{ opacity: 0 }}
                animate={ visible ? 'showingNav' : 'hidingNav' }
                variants={itemVariants}
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut'
                }}
                >
                {/* <div className='w-full h-full z-0 absolute'>
                    <ParticlesComponent />
                </div> */}
                <div className='flex flex-row w-full h-20 px-4 justify-evenly fixed z-10'>
                    <NavBarItem title='Resume' isResume={true} isVisible={visible}/>
                    <NavBarItem title={ pathname === '/projects' ? 'Home' : 'Projects' } isResume={false} isVisible={visible}/>
                    <NavBarItem title={ pathname === '/about' ? 'Home' : 'Education' } isResume={false} isVisible={visible}/>
                    <NavBarItem title='Contact Me' isResume={false} isVisible={visible}/>
                </div>
            </motion.div> 

            <div className=''>

            </div>
        </div>
        
    )
}

export default NavBar