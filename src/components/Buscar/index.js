import React from "react"
import User from "../User"
import Coffee from "./Coffee"
import Dollar from "./DollarSign"

const Buscar = () => {
  return (
    <div className="buscar__contenedor">
      <div className="buscar__content">
        <div className="buscar__item">
          <div className="buscar__body">
            <div className="buscar__user">
              <User />
            </div>
            <h5 className="buscar__titulo">Participar en el proyecto</h5>
            <p className="buscar__parrafo">
              Puedes colaborar con nosotros, participando y uniendote al
              proyecto, contáctanos.
            </p>
          </div>
        </div>
        <div className="buscar__item">
          <div className="buscar__body">
            <div className="buscar__Cofee">
              <Coffee />
            </div>
            <h5 className="buscar__titulo">Charlar sobre el sector</h5>
            <p className="buscar__parrafo">
              Estamos encantados de charlar contigo, compartir ideas y buscar
              nuevas soluciones juntos.
            </p>
          </div>
        </div>
        <div className="buscar__item">
          <div className="buscar__body">
            {" "}
            <div className="buscar__doller">
              <Dollar />
            </div>
            <h5 className="buscar__titulo">Financiación</h5>
            <p className="buscar__parrafo">
              Si estás interesado en el proyecto podemos hablar sobre posibles
              colaboraciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buscar
