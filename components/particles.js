import React, {useEffect, useState} from 'react'
import Particles from "react-tsparticles";
import "pathseg";
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function ParticlesAnimation() {
const [width, setWidth]   = useState(0);
const [height, setHeight] = useState(0);

const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
useEffect(() => {
  setWidth(window.innerWidth)
  setHeight(window.innerHeight)
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);


    const particlesInit = (main) => {
        // console.log(main.domArray);

      
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        setTimeout(() => {
          container.play();
          
        }, 2000);
        console.log(container);
      };

      console.log(width)
      return (
        <div >
        <motion.div 
        initial={{opacity: 1 }}
        animate={{opacity: 0 }}
        exit={{opacity: 1}}
        style= {{zIndex:  1, position: 'fixed', top:0, left: 0,  backgroundColor:'black', height: '100%',  width: '100%'}}
        transition={{ ease: "easeInOut",
        duration: 1, delay: 1.2}} className='particles'
         >
        </motion.div>
        <div style={{zIndex: 0, opacity:.4, top:'50%',  left: isMobile ? width / 1.7 : '53%' ,  height: height, width: width, transform:'translate(-50%, -50%)',  position:'fixed'}}>
        <BrowserView>
          {
            width > 0 &&
        <Particles
          init={particlesInit}
          loaded={particlesLoaded}        
          options={{
            background: {
              color: "#000"
            },
            detectRetina: false,
            fpsLimit: 60,
            fullScreen: false,
            autoPlay: false,
            particles: {
              color: {
                value: "#fff"
              },
              links: {
                blink: false,
                color: "#fff",
                consent: true,
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 40,
                    y: 0
                  }
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "out",
                random: true,
                speed: .4,
                straight: true
              },
              number: {
                density: {
                  enable: true,
                  area: 2000
                },
                limit: 0,
                value: 150
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.3,
                  speed: 0.5,
                  sync: false
                },
                random: { enable: true, minimumValue: 0.2 },
                value: 0.5
              },
              shape: {
                type: "circle"
                
              },
              size: {
                random: true,
                value: 5
              }
            },
            polygon: {
              move: {
                radius: 700
              },
              inlineArrangement: "equidistant",
              scale: 1.5,
              type: "inline",
              position: {
                x: width  * .01,
                y: 0
              },
              url: '/fish.svg',
            }
          }}
        />
      }
        </BrowserView>

        <MobileView>
        <Particles
          // init={particlesInit}
          // loaded={particlesLoaded}        
          options={{
            background: {
              color: "transparent"
            },
            detectRetina: true,
            fpsLimit: 60,
            fullScreen:true,
            autoPlay: true,
            particles: {
              color: {
                value: "#fff"
              },
              links: {
                blink: false,
                color: "#fff",
                consent: false,
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 40,
                    y: 0
                  }
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: .2,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 500
                },
                limit: 0,
                value: 100
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.3,
                  speed: 0.5,
                  sync: false
                },
                random: { enable: true, minimumValue: 0.3 },
                value: 0.8
              },
              shape: {
                type: "circle"
              },
              size: {
                random: true,
                value: 5
              }
            },
            polygon: {
              move: {
                radius: 700
              },
              inlineArrangement: "equidistant",
              scale:2.5,
              type: "inline",
              position: {
                x: -90,
                y: 30
              },
              url: '/fish.svg',
            }
          }}
        />
        </MobileView>
        </div>
        </div>

      )
}

export default ParticlesAnimation