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

    // const notInHomePage = title ==='Home'
    // if( notInHomePage ) {
    //     title = '/'
    // }

    return (
        
        <div className='w-full h-full'>
            {isResume &&
                    <Link href={ `https://drive.google.com/file/d/1qq0Ugv_BOCqdK1ZLcVStps-aI0Zxis03/view?usp=sharing` } >
                        <motion.div className='flex justify-center items-center w-full h-full text-white group'
                            whileHover={ isVisible ? {
                                scale: 1.02,
                                cursor: "pointer",
                                borderRadius: "0.5rem",
                                backgroundColor: "rgb(30, 41, 59)"
                            } : {
                                cursor: "default",
                            }}
                        >
                            <p className='flex text-white lg:text-lg text-center text-sm group-hover:text-emerald-700'>{title}</p>
                        </motion.div>
                </Link>
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
                                scale: 1.1,
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