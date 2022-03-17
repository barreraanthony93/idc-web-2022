import Head from 'next/head'
import Links from '../components/links'
import Particles from '../components/particles'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='main' >
      <Head>
        <title>Iglesia de Cristo</title>
        <meta name="description" content="Iglesia de Cristo en Elgin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='hero'>
      <MouseParallaxContainer>
          <MouseParallaxChild factorX={0.03} factorY={0.05} >
            <Links/>
          </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <Particles/> 
        <motion.h2  initial={{opacity: 0, y:50}} animate={{opacity:1, y: 0}} exit={{opacity: 0, y: 50}}  
        transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.3,
            }}
          >Iglesia de Cristo</motion.h2>
    </div>
  )
}
