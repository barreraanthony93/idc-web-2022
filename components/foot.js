import React from 'react'
import Link from "next/link";
import {  motion } from 'framer-motion'
import { useRouter } from 'next/router'

function Foot() {
    const router = useRouter()
    const routes = [
        {route: '/acerca', title: 'Acerca'},
        {route: '/informacion', title: 'Informacion'},
        {route: '/aprender', title: 'Aprender'},
        {route: '/evangelio', title: 'Evangelio'},
    ]
  return (
    <motion.div initial={{y:100}} animate={{y: 0}} exit={{y:100}} transition={{ease:'easeInOut', duration: 1, delay: 1 }} className='foot'>
        <ul className="foot-links">
            {routes.map((route, i) => (
                <li key={i} className={router.pathname == route.route ? 'active' :  'none'} >
                    <Link scroll={false} href={route.route} >{route.title}</Link>
                </li>
            ))}
        </ul>
    </motion.div>
  )
}

export default Foot