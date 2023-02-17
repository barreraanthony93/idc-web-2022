import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa";

function Info({show}) {
  const [toggle, setToggle] = useState(false);

  const variants = {
    grow: { 
        height: 300, 
        width: 300,
        padding: 35
 
    },
    shrink: {
      height: 50,
      width: 50,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    hide: {
        display: 'none',
        opacity: 0
    },
    show: {
        display:'block',
        opacity: 1
    }
  };

  return (
    <motion.div
      animate={show ? "show" : "hide"}
      variants={variants}
    >
      <motion.div
      className="info-circle"
      animate={toggle ? "grow" : "shrink"}
      variants={variants}
      style={{
        position: "fixed",
        bottom: 10 ,
        right: 20,
        borderRadius: 50,
      }}
      onClick={() => setToggle(!toggle)}>
        <div>

        <FaQuestion />
        <motion.div  animate={toggle ? "show" : "hide"} variants={variants}>
            <h1>¿Tiene preguntas?</h1>
            <p>Si tienes alguna pregunta o duda no dudes en contactarnos!</p>
            <p><strong>email: </strong>idcelgin@gmail.com</p>
            <p><strong>telefono: </strong>(847)736-4189</p>
        </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Info;
