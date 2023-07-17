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


interface pageProps {

}

const useIntro = () => {
  const storage = window.localStorage
  const currTimestamp = Date.now()
  const timeStamp = JSON.parse(storage.getItem('timestamp') || '1000')
  const timeLimit = 3 * 60 * 1000 // 3 hours
  const hasTimePassed = currTimestamp - timeStamp > timeLimit

  useEffect(() => {
    hasTimePassed ? 
      storage.setItem('timestamp', currTimestamp.toString())
      :
      storage.setItem('timestamp', timeStamp.toString())
  }, [currTimestamp, hasTimePassed, storage, timeStamp])

  return hasTimePassed
}

const Page = ({ }) => {

  const [isDoneLoading, setIsDoneLoading] = useState(false)
  const showAnimation = useIntro()
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
    height: "100vh",
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

  // const mousemoveHandler = () => {
  //   let mousePos = { x: event.clientX, y: event.clientY}
  // }



  return (
    <main>
      {/* <AnimatedCursor 
        showSystemCursor={true} 
        outerStyle={{ display: "none" }}
        innerSize={100}         
        innerStyle={{ 
          backgroundColor: 'rgba(15, 23, 42, 0.0)',
          backgroundImage: 'radial-gradient(rgba(30, 41, 59, 0.1), rgba(15, 23, 42 0.1), transparent 100%)',
          
         }}
      /> */}

      {isDoneLoading && (
        <motion.div className='bg-slate-00'
          transition={{
            ease: "easeIn",
            duration: 0.7,
          }}
        >
          <MobileNavMenu />
          {/* <NavBar pageName="Home"/> */}
          <PageOne />
          <MobileQuickView />
          <Quickview />
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