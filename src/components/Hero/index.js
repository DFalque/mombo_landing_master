import React from "react"
import { sectionIds } from "../../constants/sections"
import ImgHero from "./ImgHero"
import { getAnchorLink } from "../../utils/links"

const Hero = () => {
  const link = getAnchorLink(sectionIds.queBuscamos)
  return (
    <div className="hero__container">
      <div className="hero__background"></div>
      <div className="hero__containerHero">
        <div className="hero__containerText">
          <h1 className="hero__tittle">
            Lleva el futuro a tu Agencia de Viajes
          </h1>
          <p className="hero__text">
            Todo lo que necesitas para brindar un excelente servicio a tus
            clientes en un sólo lugar.
          </p>
          <div style={{ marginTop: "60px" }}>
            <a className="hero__link" href={link}>
              Contacta con Nosotros
            </a>
          </div>
        </div>
        <div className="hero__image-column">
          <ImgHero
            className="hero__image"
            style={{
              zIndex: -1,
            }}
            alt="level"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
