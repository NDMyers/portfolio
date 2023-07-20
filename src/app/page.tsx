'use client'
import React, {  FC, useEffect, useState, useCallback } from "react"
import { motion } from 'framer-motion'
import PageOne from './components/PageOne'
import NavBar from './components/NavBar'
import MobileQuickView from "./components/MobileQuickView"
import MobileNavMenu from "./components/MobileNavMenu"
import Quickview from "./components/Quickview"
import AnimatedCursor from 'react-animated-cursor'
import ParticlesComponent from "./components/ParticlesComponent"
import PageTwo from "./components/PageTwo"


interface pageProps {

}

// const useIntro = () => {
//   // const storage = window.localStorage 
//   const currTimestamp = Date.now()
//   const timeStamp = JSON.parse(storage.getItem('timestamp') || '1000')
//   const timeLimit = 3 * 60 * 1000 // 3 hours
//   const hasTimePassed = currTimestamp - timeStamp > timeLimit

//   useEffect(() => {
//     hasTimePassed ? 
//       storage.setItem('timestamp', currTimestamp.toString())
//       :
//       storage.setItem('timestamp', timeStamp.toString())
//   }, [currTimestamp, hasTimePassed, storage, timeStamp])

//   return hasTimePassed
// }

const Page = ({ }) => {

  const [isDoneLoading, setIsDoneLoading] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  // const storage = typeof window !== 'undefined' ? window.localStorage : null
  // if()
  // const showAnimation = useIntro()
  useEffect(() => {
    const storage = window.localStorage
    const currTimestamp = Date.now()
    const timeStamp = JSON.parse(storage.getItem('timestamp') || '1000')
    const timeLimit = 3 * 60 * 1000
    const hasTimePassed = currTimestamp - timeStamp > timeLimit

    hasTimePassed ? 
      storage.setItem('timestamp', currTimestamp.toString())
      :
      storage.setItem('timestamp', timeStamp.toString())
    
    setShowAnimation(hasTimePassed)
  }, [])



  const [hasLoadedBefore, setHasLoadedBefore] = useState(Boolean)

  useEffect(() => {
    if( !showAnimation ) {
      setIsDoneLoading(true)
    }
  }, [showAnimation])


  const LoadingDot = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "white",
    borderRadius: "50%"
  };

  const LoadingContainer = {
    width: "30%",
    height: "80vh",
    display: "flex",
    justifyContent: "space-around",
  };

  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2
      }
    },
    animate: {
      transition: {
        staggerChildren: 0.2
      },
    },
  };

  const DotVariants = {
    animate: {
      y: ["0%", "100%", "0%"],
      opacity: [0, 0.5, 1, 0.5, 0],
    }
  };

  const DotTransition = {
    duration: 0.7,
    repeat: 1,
    ease: "easeInOut",
  };

  return (
    <main>

      {isDoneLoading && (
        <motion.div className='bg-slate-900'
          transition={{
            ease: "easeIn",
            duration: 0.7,
          }}
        >
          {/* <MobileNavMenu /> */}
          <NavBar pageName="Home"/>
          <PageOne />
          <MobileQuickView />
          <Quickview />
          <PageTwo />
        </motion.div>
      )}
      
      {showAnimation &&
      <div className='pt-[30rem] w-full flex items-center justify-center fixed'>
        <motion.div
          style={LoadingContainer}
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
          onAnimationComplete={()=> setIsDoneLoading(true)}
        >
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
        </motion.div>
      </div>
      }

    </main>
  )
}

export default Page