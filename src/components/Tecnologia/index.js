import React from "react"

import User from "../User"
import Happy from "./Happy"
import Graphic from "./Graphic"
import Tool from "./Tool"

const Tecnologia = () => {
  return (
    <div className="tecnologia__contenedorAgencias">
      <div className="tecnologia__title">
        <p>Tecnología</p>
      </div>
      <div className="tecnologia__explicacionAgencias">
        <div className="tecnologia__explicacionAgenciasApartado">
          <div className="tecnologia__user">
            <User />
          </div>

          <div className="tecnologia__explicacionAgenciasApartadoTexto">
            {" "}
            <div>
              <h5 className="tecnologia__titulo">Llega a tu mercado</h5>
            </div>
            <p className="tecnologia__paragraph">
              No importa si te dedicas a un nicho específico, a una localización
              geográfica en concreto o a varios mercados diferentes, asociamos
              tu contenido con tu cliente potencial .
            </p>
          </div>
        </div>
        <div className="tecnologia__explicacionAgenciasApartado">
          <div className="tecnologia__happy">
            <Happy />
          </div>

          <div className="tecnologia__explicacionAgenciasApartadoTexto">
            {" "}
            <div>
              <h5 className="tecnologia__titulo">Conoce a tu cliente</h5>
            </div>
            <p className="tecnologia__paragraph">
              Conoce las preferencias de los viajeros sin preguntarselo,
              organiza itinerarios interactivos con ellos, olvidate de los
              corrreos y pásate al chat 24/7.
            </p>
          </div>
        </div>
        <div className="tecnologia__explicacionAgenciasApartado">
          <div className="tecnologia__graphic">
            <Graphic />
          </div>

          <div className="tecnologia__explicacionAgenciasApartadoTexto">
            {" "}
            <div>
              <h5 className="tecnologia__titulo">Aumenta la visibilidad</h5>
            </div>
            <p className="tecnologia__paragraph">
              Crea tu perfil y publica tus ofertas, desde ese momento cualquier
              persona con nuestra aplicación podrá encontrarte y contactar
              contigo.
            </p>
          </div>
        </div>
        <div className="tecnologia__explicacionAgenciasApartado">
          <div className="tecnologia__tool">
            <Tool />
          </div>

          <div className="tecnologia__explicacionAgenciasApartadoTexto">
            {" "}
            <div>
              <h5 className="tecnologia__titulo">Más herramientas</h5>
            </div>
            <p className="tecnologia__paragraph">
              Nuestra plataforma nace con el objetivo de seguir ofreciendo
              recursos y herramientas a las agencias, como bots, itinerarios
              inteligentes, canal de proveedores exlcusivos, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tecnologia
