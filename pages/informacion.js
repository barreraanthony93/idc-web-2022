import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

function informacion() {
  const initial = { opacity: 0, y: -30 };
  const animate = { opacity: 1, y: 0 };
  const exit = { opacity: 0, y: -30 };
  const duration  = 1
  return (       
    <motion.div  initial={initial}
    animate={animate} exit={exit}
      transition={{
        ease: "easeInOut",
        duration: duration,
          }}className='directions main'>
        <div className='info'>
          <AnimatePresence>
          <motion.h1
          key={1}
           initial={initial}
            animate={animate}
            exit={exit}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.2,
            }}>¿Dónde se encuentra su iglesia?</motion.h1>
          <motion.div
            key={2}
          initial={initial}
          animate={animate}    
          exit={exit}      
          transition={{
            ease: "easeInOut",
            duration: duration,
            delay: 0.3,
          }}
          style={{
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center'
          }}>
            <p>Visite nuestra ubicación en 1020 W. Highland Ave. Elgin IL 60123 </p>
            <a href='https://www.google.com/maps/place/Iglesia+de+Cristo+en+Elgin/@42.038945,-88.3042241,15z/data=!4m2!3m1!1s0x0:0x46f7a2a8a950e784?sa=X&ved=2ahUKEwi7rPL92Lv2AhUNJzQIHeqFBY4Q_BJ6BAgtEAU' target="_blank" rel="noreferrer" className="button">Direcciones</a>
          </motion.div>  
          <motion.h1
                    key={3}
          initial={initial}
          animate={animate}  
          exit={exit}        
          transition={{
            ease: "easeInOut",
            duration: duration,
            delay: 0.4,
          }}
          >¿Qué días puedo visitar?</motion.h1>  
          <motion.div
                    key={4}

          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            ease: "easeInOut",
            duration: duration,
            delay: 0.5,
          }}>
            <p>Practica de Cantos :  <strong> Lunes 7 - 8 PM</strong> </p>
            <p>Estudio Biblico : <strong>Miercoles 7 - 8 PM</strong> </p>
            <p>Servicio : <strong> Domingo 9:30 - 11:30 AM</strong>  </p>
            <p>Estudio Biblico : <strong>Domingo 3 - 4 PM</strong> </p>
          </motion.div>
          </AnimatePresence>
        </div>
        {/* <img className='map' src='/map-elgin.svg'/> */}
        {/* <div className='map'>
        </div> */}
    </motion.div>
  )
}

export default informacion