import React, {useState} from 'react'
import '../styles/globals.scss'
import Header from '../components/header'
import Foot from '../components/foot'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Info from '../components/info'
import Script from 'next/script'
import Background from '../components/background' 
const variants = {
  hidden: { opacity: 1, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}

function MyApp({ Component, pageProps, router }) {
  const Router = useRouter()

  const exitSteps = () => {
    // window.scrollTo(0, 0)

  }
  return (
    <div className="container">
      <div className='background-gradient'></div>
      <Background/>
      <Header />
      <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        // initial="hidden"
        // animate="enter" 
        // exit="exit" 
        // transition={{ type: 'ease', delay: 0.2, duration: .4 }}
        // variants={variants}

      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
     {Router.pathname !== "/" && <Foot />}
     {<Info show={Router.pathname !== "/" ? true : false}/> }
    </div>
  );
}

export default MyApp
