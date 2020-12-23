import React from "react"
import Image from "gatsby-image"

import { sectionIds } from "../constants/sections"
import { getAnchorLink } from "../utils/links"

const Particulares = ({ image }) => {
  const link = getAnchorLink(sectionIds.queBuscamos)
  return (
    <div className="particulares__contenedor" id={sectionIds.particulares}>
      <div className="particulares__introducion">
        <p className="particulares__parrafoIntroduccion">PARA PARTICULARES</p>
        <h2 className="particulares__tituloIntroducccion">
          Organiza para tí, organiza para otros.
        </h2>
        <p className="particulares__parrafoIntroduccion2">
          Todos llevamos una agencia dentro, aprovéchalo.
        </p>
      </div>
      <div className="particulares__explicacion">
        <div className="particulares__explicacionTexto">
          <h2 className="particulares__titulo">
            El futuro no es solo para las agencias, forma parte del cambio
          </h2>
          <p className="particulares__parrafo">
            Comparte tu experiencia y gana algo más que las gracias. Con Mombo
            podrás organziar viajes, hacer recomendaciones, enviar ofertas de
            viaje y mucho más. Entra, organiza viajes y gana dinero desde tu
            casa.
          </p>
          <p className="particulares__parrafoResaltado">
            Si eres un particular con experiencia en organizar viajes, esta es
            tu plataforma ideal, contacta con nosotros para saber más.
          </p>
          <div style={{ marginTop: "60px" }}>
            <a className="particulares__Contactar" href={link}>
              Contactar
            </a>
          </div>
        </div>
        <div className="particulares__explicacionImagen">
          {image && <Image fluid={image.childImageSharp.fluid} />}
        </div>
      </div>
    </div>
  )
}

export default Particulares
