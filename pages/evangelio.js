import React from "react";
import { motion } from "framer-motion";

function creencia() {
  const array = [
    {
      title: "Evangelio de Jesucristo",
      text: "Dios envió a su hijo a la tierra, quien tiene su vida para salvarte de tus pecados.",
      details: [
        {
          title: "Muerte",
          text: "Porque también Cristo padeció una sola vez por los pecados, el justo por los injustos, para llevarnos a Dios, siendo a la verdad muerto en la carne, pero vivificado en espíritu. 1 Pedro 3:18",
        },
        {
          title: "Sepultura",
          text: "Mas el ángel, respondiendo, dijo a las mujeres: No temáis vosotras; porque yo sé que buscáis a Jesús, el que fue crucificado. No está aquí, pues ha resucitado, como dijo. Venid, ved el lugar donde fue puesto el Señor. Mateo 28:5-6",
        },
        {
          title: "Resureccion",
          text: "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto? Juan 11:25-26",
        },
      ],
    },
    {
      title: "Plan de Salvacion",
      text: "El plan de salvación de Dios es perfecto. Vea a continuación los 6 pasos para encontrar la salvación de su alma.",
      details: [
        {
          title: "Oir",
          text: "DEBES OÍR LA VERDADERA PALABRA DE DIOS",
          verse:
            '"Así que la fe viene por el oír y el oir por la palabra de Dios". Romanos 10:17',
        },
        {
          title: "Creer",
          text: "DEBES CREER QUE JESUS ​​ES EL HIJO VERDADERO DE DIOS",
          verse:
            '"Por eso te dije que morirías en tus pecados, porque si no crees que yo soy Él, morirás en tus pecados". Juan 8:24',
        },
        {
          title: "Arrepentirse",
          text: "DEBES ARREPENTIRTE DE TUS PECADOS",
          verse:
            '"Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados, para que vengan los tiempos de refrigerio de la presencia del Señor" Hechos 3:19.',
        },
        {
          title: "Confesar",
          text: "DEBES CONFESAR TU FE EN JESUCRISTO",
          verse:
            '"Debes confesar que Jesús es el Señor. Él es el Señor, lo confiesas o no, pero es para tu salvación que debes reconocer su deidad y su propiedad" Romanos 10: 9 -10.',
        },
        {
          title: "Resureccion",
          text: "DEBES SER BAUTIZADO POR LA INMERSIÓN",
          verse:
            '"Sed bautizados para la remisión de los pecados," Entonces Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados, y recibiréis el don del Espíritu Santo." Hechos 2:38',
        },
        {
          title: "Fidelidad",
          text: "DEBES VIVIR UNA VIDA FIEL HASTA LA MUERTE",
          verse:
            '"Vivid una vida cristiana fiel en la comunión del pueblo de Dios" Por tanto, mis amados hermanos, estad firmes, inamovibles, siempre abundando en la obra del Señor, sabiendo que vuestro trabajo no es en vano en el Señor." 1 Corintios 15:58',
        },
      ],
    },
  ];

  const initial = { opacity: 0, y: -30 };
  const animate = { opacity: 1, y: 0 };
  const exit = { opacity: 0, y: -30 };
  return (
    <div className="box about">
        {array.map((val, i) => (
          <div key={i}>
            <motion.h1
              key={i + 1}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: i * 0.2,
              }}
            >
              {val.title}
            </motion.h1>
            <motion.p
              key={i + 2}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: i * 0.2,
              }}
            >
              {val.text}
            </motion.p>
            <div className="about-details" >
              {val.details &&
                val.details.map((el, ii) => (
                  <motion.div
                    className="card"
                    key={ii}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ease: 'easeInOut',
                      duration: 1,
                      delay: ii * 0.1,
                    }}
                  >
                    <h1 style={{height: 0}}>{el.title}</h1>
                    <div
                      className="divider"
                      style={{ backgroundColor: "black" }}
                    ></div>
                    <h2>{el.text}</h2>
                    <p>{el.verse}</p>
                    <p className="num">{ii + 1}</p>
                  </motion.div>
                ))}
            </div>
            {i < array.length - 1 && (
              <motion.div
               key={221}
                className="divider"
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  delay: i * 0.2,
                }}
              ></motion.div>
            )}{" "}
          </div>
        ))}
    </div>
  );
}

export default creencia;
