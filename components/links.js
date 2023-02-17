import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion'
import {BiHomeHeart ,BiTrip, BiBrain, BiBible} from 'react-icons/bi'
import {BsClouds} from 'react-icons/bs'

function links() {
  
  const  routes = [
    {route: "/acerca", question : "¿Quien somos?", icon: <BiHomeHeart/>},
    {route: "/informacion", question : "¿Quieres acompañarnos?",icon: <BiTrip/>},
    {route: "/aprender", question : "¿Quieres aprender de Dios?" ,icon: <BsClouds/>},
    {route: "/evangelio", question : "¿Qué creemos y enseñamos?" , icon: <BiBible/>},
  ]
 
  return (
    <ul  
    className="links">
      {routes.map((val, i) => (
        <motion.li key={i} 
        // className="glass-card"
        initial={{opacity: 0, x: -50}}
        animate={{opacity:1, x: 0}}
        exit={{opacity: 0, x: -50}}
        transition={{  ease: "easeInOut",
        duration: 1, delay: i *  0.2
      }}
        >
          {val.icon}
          <Link passHref href={val.route}>{val.question}</Link>
        </motion.li>
      ))}
    </ul>
  );
}

export default links;
