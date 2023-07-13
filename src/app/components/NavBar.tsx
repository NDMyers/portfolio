'use client'
import { FC, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import NavBarItem from './NavBarItem';

interface NavBarProps {
  
}

const NavBar: FC<NavBarProps> = ({}) => {

    const [prevScrollPos, setPrevScrollPos] = useState(-1);
    const [visible, setVisible] = useState(true)

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

    return (
        <div>
            {visible && 
            <motion.div className='hidden sm:flex flex-row fixed right-0 lg:mr-8 mr-4 mt-4 items-center lg:w-[65%] w-1/2 h-20 border-emerald-700 border-4 rounded-lg px-4 justify-evenly bg-slate-900'
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{
                    duration: 1,
                    delay: 0
                }}
                >
                <NavBarItem title='Resume' isResume={true}/>
                <NavBarItem title='Projects' isResume={false} />
                <NavBarItem title='About' isResume={false} />
                <NavBarItem title='Contact Me' isResume={false}/>
            </motion.div> }


            <div className=''>

            </div>
        </div>
        
    )
}

export default NavBar