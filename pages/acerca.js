import React from "react";
import { motion } from "framer-motion";

function acerca() {
  const array = [
    {
      title: "Somos Elgin",
      image: "/church.png",
      text: "Somos la Iglesia de Cristo, una iglesia en Elgin, Illinois, que sigue a Jesucristo como Señor y trabaja para cumplir el deber que Dios le ha dado a sus hijos. Hacemos esto amando a Dios, amando a los demás y sirviendo a Elgin y al mundo.",
    },
    {
      title: "Nuestra Vision",
      text: "Creciendo más y más cada día para volvernos más espirituales con Jesucristo como nuestro fundamento.",
      details: [
        {
          title: "Nuestra adoración a Él",
          text: "Nuestras asambleas de adoración honran y glorifican su nombre y nuestras vidas demuestran una relación de adoración continua. Hebreos 12:28",
        },
        {
          title: "Siendo un pueblo santo",
          text: "Como pueblo elegido de Dios, viviremos vidas santas, revestidas de compasión, amabilidad, humildad, mansedumbre y paciencia. Colosenses 3:12",
        },
        {
          title: "Siendo una familia amorosa",
          text: "Mostraremos nuestro amor porque Dios primero nos amó y cuando nos amamos unos a otros, Dios vive en nosotros y su amor se completa en nosotros. 1 Juan 4:11-12",
        },
        {
          title: "Servir unos a otros",
          text: "Así como Jesús vino a este mundo, no para ser servido, sino para servir, serviremos a las necesidades de los demás en nuestra interacción diaria con las personas. Galatas 3:13",
        },
        {
          title: 'Compartiendo las "Buenas Nuevas" de Jesús',
          text: "Seremos personas que compartan nuestra fe en Dios con el mundo y salvación que solo puede venir del mismo Cristo. Mateo 28:18-20",
        },
      ],
    },
    {
      title: "Nuestra Historia",
      text: `La Iglesia de Cristo en Elgin comenzó con unas pocas familias reunidas en el sótano de la Iglesia de Cristo Westside de habla inglesa en Elgin a fines de la década de 1980. Después de superar el sótano, decidimos alquilar una antigua escuela de dos pisos a partir de 1998. Pero en poco tiempo, nuestros 35 miembros crecieron hasta se convierten en más de 150. Para lidiar con la aglomeración, compramos una cámara de video y transmitimos el servicio al piso de abajo. Los miembros fueron asignados en forma rotativa para adorar a través de la transmisión de video. A mediados de la década de 2000, compramos dos acres para construir un nuevo edificio. Sin embargo, finalizar los planos de construcción y obtener la aprobación de la ciudad para los planes llevó tiempo. Entonces la recesión golpeó. Las dificultades llegaron y los planes para construir un nuevo edificio se hicieron inviables. Los años de oración fueron respondidos cuando una iglesia menguante de Christian Scientist acordó vender su edificio. El 3 de agosto de 2014, la iglesia de Cristo pudo adorar juntos en su nuevo edificio, sabiendo que Dios nos había permitido cumplir esta meta a largo plazo. Con espacio para crecer, nos imaginamos convertirnos en un modelo de ministerio latino, incluyendo la posibilidad de comenzar una asamblea de habla inglesa en su espaciosa sala de confraternidad.`,
    },
    {
      title: "Nuestro Ministro",
      text: `Ricardo Barrera reside en Elgin (Chicago), IL. Casado con Atala (Taly) Smirna Barrera con un Hijo Varón (Kaleb O´lanni Barrera) Kaleb O´lanni significa regalo del cielo en hawaiiano. Nació y vivió en la Ciudad de México hasta que vino a este país en la década de los 90. Graduado en Administración de Empresas (HU Oak Brook, Illinois), ejerció por más de 15 años para la compañía Mcdonald’s donde tuvo a su cargo 500 empleados & 100 gerentes (6-8 restaurantes en el area metropolitana de Chicago). En esta posición fundó varios comites comunitarios dentro de la compañía con enfoque de hispanos. Graduado y encomendado del Instituto Biblico Alfa & Omega (Hope, Arkansas). Graduado de la Universidad Teologica de America con una Maestría en Educación Cristiana y un Doctorado en Teología (Th.D. in Theology). Graduado de la Escuela de Canto de la Universidad de Abilene (ACU en Abilene, Texas). Creador de Himnos en Pantalla www.himnosenpantalla.com himnario que se usa en pantalla con cañones (proyectores). Profesor de la Escuela de Canto (Frente del departamento en español de la Escuela). También dirige seminarios de canto en varias partes de EE.UU., México, Centroamerica, el Cáribe y Sudamerica. Fundador de Catch’s Productions (Una compañía que ofrece recursos a la Iglesia de Cristo). Predicador y Ministro por más de 18 años en Elgin. Ha visitado y predicado en Tierra Santa, Egipto, Jordania, Turquía, Grecia, Italia, EEUU, España, México, El Caribe, Centroamérica y Sudamérica, así como en varias conferencias para las universidades de la Iglesia de Cristo en EEUU, como Pepperdina, California; Abilene, Texas; Orlando, Florida; Rochester, Michigan; entre otras. Escribe artículos de investigación en cuanto a sus viajes para algunos periódicos de la Iglesia de Cristo en ingles y español. Escritor de la serie de libros: Jesús Desde el Punto de vista cultural judío e Iglesia Desde el Punto de vista cultural Greco-Romano. Organizador de misiones para la Iglesia de Cristo en Elgin y Chicago a distintos puntos de México como casas cuba, iglesias, etc.`,
    },
  ];

  const initial = { opacity: 0, y: -30 };
  const animate = { opacity: 1, y: 0 };
  const exit = { opacity: 0, y: -30 };

  return (
    <motion.div  initial={initial}
    animate={animate}
    exit={exit}
    transition={{
      ease: "easeInOut",
      duration: .7,
    }} className="box about about-only">
      {array.map((val, i) => (
        <div key={i}>
          <motion.h1
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: i * 0.2,
            }}
          >
            {val.title}
          </motion.h1>
          {/* {val.image && (
            <motion.div
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: i * 0.3,
              }}
              style={{
                height: 200,
                backgroundImage: "url(/church.png)",
                backgroundSize: "cover",
                // backgroundPositionY: -150,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                filter: "grayscale(.6)",
                borderRadius: 12,
                border: "solid 1px white",
              }}
            />
          )} */}
          <motion.p
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: i * 0.2,
            }}
          >
            {val.text}
          </motion.p>
          <div className="about-details">
            {val.details &&
              val.details.map((el, ii) => (
                <motion.div
                  className="card"
                  key={ii}
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: ii * 0.1,
                  }}
                >
                  <h1>{el.title}</h1>
                  <div
                    className="divider"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <p>{el.text}</p>
                </motion.div>
              ))}
          </div>
          {i < array.length - 1 && (
            <motion.div
              className="divider"
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: i * 0.2,
              }}
            ></motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default acerca;
