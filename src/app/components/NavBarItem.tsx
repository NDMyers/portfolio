import { FC } from 'react'
import { motion } from 'framer-motion'
import { LucideArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import * as Scroll from 'react-scroll'

interface NavBarItemProps {
    title: string
    isResume: boolean
    isVisible: boolean
}

const NavBarItem: FC<NavBarItemProps> = ({ title, isResume, isVisible }) => {

    return (
        
        <div className='w-full h-full'>
            {isResume &&
                    <a href={ `https://drive.google.com/file/d/1ooDgSPuyOcWo35RRF1lm5G9JdFYybt-M/view?usp=sharing` } >
                        <motion.div className='flex justify-center items-center w-full h-full text-white group'
                            whileHover={ isVisible ? {
                                cursor: "pointer",
                                borderRadius: "0.5rem",
                                backgroundColor: "rgb(30, 41, 59)"
                            } : {
                                cursor: "default",
                            }}
                        >
                            <p className='flex text-white lg:text-lg text-center text-sm group-hover:text-emerald-700'>{title}</p>
                        </motion.div>
                </a>
            }
            {!isResume &&
                <Scroll.Link 
                    // to={ isResume ? `https://drive.google.com/file/d/1qq0Ugv_BOCqdK1ZLcVStps-aI0Zxis03/view?usp=sharing` : `${title}`}
                    activeClass='active'
                    to={`${title}`}
                    className='w-[20%] h-[80%] group mt-2'
                    smooth={true}
                    offset={50}
                    duration={500}
                    >
                        <motion.div className='flex justify-center items-center w-full h-full text-white group'
                            whileHover={ isVisible ? {
                                cursor: "pointer",
                                borderRadius: "0.5rem",
                                backgroundColor: "rgb(30, 41, 59)"
                            } : {
                                cursor: "default",
                            }}
                        >
                        {/* <p className='flex text-white lg:text-lg text-center text-sm group-hover:text-emerald-700'>{notInHomePage ? 'Home' : title}</p> */}
                            <p className='flex text-white lg:text-lg text-center text-sm group-hover:text-emerald-700'>{title}</p>
                        </motion.div>
                </Scroll.Link>
            }
        </div>
    )
}

export default NavBarItem