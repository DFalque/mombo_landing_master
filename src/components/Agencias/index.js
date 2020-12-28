import React from "react"
import Bult from "./UBolt"
import Write from "./Write"
import Clock from "./Clock"
import Compass from "./Compass"
import { sectionIds } from "../../constants/sections"

const Agencias = () => {
  return (
    <div className="agencias__contenedorAgencias" id={sectionIds.agencias}>
      <div>
        <p className="agencias__Para_Agencias">Para Agencias</p>
        <h2 className="agencias__las_agencias">
          El mañana de las agencias de viaje. Hoy.
        </h2>
        <p className="agencias__Para_Agencias2">
          Forma parte de una nueva manera de organizar los viajes.
        </p>
      </div>
      <div className="agencias__explicacionAgencias">
        <div className="agencias__explicacionAgenciasApartado">
          <div className="agencias__Bult">
            <Bult />
          </div>

          <div className="agencias__explicacionAgenciasApartadoTexto">
            {" "}
            <div style={{ width: "55%" }}>
              <h5 className="agencias__titulo">Fácil, Rápido y Sencillo</h5>
            </div>
            <p className="agencias__deffination">
              Diseñado para que los viajeros no tengan que pensar, reduce el
              tiempo de organización de un viaje y mejora la calidad y la
              experiencia de usuario.
            </p>
          </div>
        </div>
        <div className="agencias__explicacionAgenciasApartado">
          <div className="agencias__Write">
            <Write />
          </div>

          <div className="agencias__explicacionAgenciasApartadoTexto">
            {" "}
            <div style={{ width: "55%" }}>
              <h5 className="agencias__titulo">Contenido Personalizado</h5>
            </div>
            <p className="agencias__deffination">
              Menos cantidad, más calidad. Analizamos las preferencias de los
              viajeros para ayudar a las agencias a oferecerles contenido de
              interés.
            </p>
          </div>
        </div>
        <div className="agencias__explicacionAgenciasApartado">
          <div className="agencias__Clock">
            <Clock />
          </div>

          <div className="agencias__explicacionAgenciasApartadoTexto">
            {" "}
            <div style={{ width: "55%" }}>
              <h5 className="agencias__titulo">
                Siempre online, siempre disponible
              </h5>
            </div>
            <p className="agencias__deffination">
              En nuestra plataforma los viajeros tendrán muy fácil encontrarte,
              ver tus ofertas y contactar contigo, desde sus smartphones,
              tablets u ordenadores.
            </p>
          </div>
        </div>
        <div className="agencias__explicacionAgenciasApartado">
          <div className="agencias__Compass">
            <Compass />
          </div>

          <div className="agencias__explicacionAgenciasApartadoTexto">
            {" "}
            <div style={{ width: "55%" }}>
              <h5 className="agencias__titulo">Un lugar donde Inspirarse</h5>
            </div>
            <p className="agencias__deffination">
              Tus clientes encontrarán guías, recomendaciones, ofertas y todo lo
              que necesitan para encontrar inspiración en sus próximos viajes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agencias
