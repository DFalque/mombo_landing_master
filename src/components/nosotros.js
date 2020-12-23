import React from "react"
import Image from "gatsby-image"

import { sectionIds } from "../constants/sections"

const Nosotros = ({ image }) => (
  <div className="nosotros__container" id={sectionIds.nosotros}>
    <div className="nosotros__introduction">
      <p className="nosotros__inntroductionText">Sobre Nosotros</p>
      <h2 className="nosotros__inntroductionTittle">
        “Mombo existe para mejorar la forma en la que viajamos y conocemos el
        mundo e inspirar a las personas a seguir viajando”
      </h2>
      <div className="nosotros__line"></div>
    </div>
    <div className="nosotros__main">
      <div className="nosotros__mainText">
        <h2 className="title" className="nosotros__mainTextTittle">
          Una plataforma para conectar agencias y viajeros
        </h2>
        <p className="nosotros__mainTextP">
          Ofrecemos una plataforma que permite a los viajeros consultar,
          organizar y reservar su viaje de forma fácil, rápida y sencilla con la
          ayuda de las agencias de viaje.
        </p>
        <p className="nosotros__mainTextPColor">
          Si eres una agencia de viajes y estas pensando en como afrontar los
          nuevos retos que se presentan, quédate y echa un vistazo.
        </p>
        <div style={{ marginTop: "60px" }}>
          <a className="nosotros__link">Ver Presentación</a>
        </div>
      </div>
      <div className="nosotros__mainImagen">
        {image && <Image fluid={image.childImageSharp.fluid} />}
      </div>
    </div>
  </div>
)

export default Nosotros