import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function aprender() {
  const initial = { opacity: 0, y: -30 };
  const animate = { opacity: 1, y: 0 };
  const exit = { opacity: 0, y: -30 };

  return (
    <div className="learn" >
      <div>
        <motion.h1
          key={1}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 0.2,
          }}
        >
          ¿Cómo puedo aprender más acerca de Dios y su Palabra?
        </motion.h1>

        <motion.div
          key={2}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 0.3,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Si te gustaría saber más de Dios y lo que quiere de tu vida, visita
            el canal de youtube de nuestro predicador Ricardo Barrera donde
            encontrarás mas de 1000+ videos de la Palabra del Señor.
          </p>
          <a
            href="https://www.youtube.com/c/RICARDOBARRERACATCH"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            {" "}
            clic para aprender más{" "}
          </a>
        </motion.div> 
      </div>
    </div>
  );
}

export default aprender;
