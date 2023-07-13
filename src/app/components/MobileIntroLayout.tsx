// "use client"

// import { FC, useState } from 'react'
// import Typewriter from 'typewriter-effect'
// import { motion } from 'framer-motion'
// import { LucideArrowDown } from 'lucide-react'
// import * as Scroll from 'react-scroll'
// import Image from 'next/image'

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

// interface MobileIntroLayoutProps {
  
// }

// const MobileIntroLayout: FC<MobileIntroLayoutProps> = ({}) => {

//     const [introIsVisible, setIntroIsVisible] = useState(false)

//     return (
//         <div className='outline-dashed h-screen flex flex-col items-center'>
//             <div className=''>
//                 <h1 className='break-words mt-20 ml-4'>
//                     <div className='text-white text-center font-bold text-6xl'>
//                     <Typewriter onInit={(typewriter) => {
//                         typewriter.typeString('Nick Myers')
//                         typewriter.start()
//                         typewriter.callFunction(()=>{setIntroIsVisible(true)})
//                     }} />
//                     </div>
//                 </h1>
//             </div>

//             <motion.div className='mt-20'
//                 initial={false}
//                 animate={
//                     introIsVisible
//                     ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
//                     : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
//                 }
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true }}
//                 >
//                 <Image className='' src='/mtmobile2.png' alt="pastel mountains"/>
//             </motion.div>


//             {introIsVisible 
//             ? ( 
//                 <motion.div
//                     className='outline-dashed'
//                     initial='offscreen'
//                     whileInView='onscreen'
//                     viewport={{once: true, amount: 0.8}}
//                 >
//                     <motion.div variants={{
//                     offscreen: {
//                         y: 400, 
//                         visibility: 'hidden'
//                     },
//                     onscreen: {
//                         y: -60,
//                         visibility: 'visible',
//                         transition: {
//                         type: 'spring',
//                         bounce: 0.4,
//                         duration: 0.8
//                         }
//                     }
//                     }}>
//                     <Scroll.Link activeClass='active' to='pageOne' spy={true} smooth={true} offset={50} duration={500}>
//                         <LucideArrowDown className='text-white h-10 w-10 animate-bounce hover:cursor-pointer hover:text-cyan-600' />
//                     </Scroll.Link>
//                     </motion.div>
//                 </motion.div> )
//             : <LucideArrowDown className='h-10 w-10 invisible' /> }
//         </div>
//     )
// }

// export default MobileIntroLayout