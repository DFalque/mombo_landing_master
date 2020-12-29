import React from "react"
import Profile from "./Profile"
import ChartBar from "./ChartBar"
import Notes from "./Notes"
import Chats from "../../images/chats.svg"

const Herramientas = () => {
  return (
    <div className="herramientas__contenedorHerramientas">
      <div className="herramientas__introduccionHerramientas">
        {" "}
        <h2 className="herramientas__heading1">
          Algunas de nuestras herramientas para ti.
        </h2>
      </div>
      <div className="herramientas__explicacionHerramientas">
        <div className="herramientas__explicacionHerrameintasApartado">
          <div className="herramientas__head">
            <Profile />
          </div>
          <div className="herramientas__body">
            <h5 className="herramientas__titulo">Perfil propio</h5>
            <p className="herramientas__parrafo">
              Crea tu perfil y todo usuario de tu país te podrá encontrar
              facilmente, además podrás analizar el interés que hay en tu
              perfil.
            </p>
          </div>
        </div>
        <div className="herramientas__explicacionHerrameintasApartado">
          <div className="herramientas__chartbar">
            <ChartBar />
          </div>
          <div className="herramientas__body">
            <h5 className="herramientas__titulo">Ofertas inteligentes</h5>
            <p className="herramientas__parrafo">
              Crea ofertas de viaje, con fechas, destinos e itinerarios, mombo
              analizará el contenido y lo hará llegar a los viajeros más
              interesados.
            </p>
          </div>
        </div>
        <div className="herramientas__explicacionHerrameintasApartado">
          <div className="herramientas__notes">
            <Notes />
          </div>
          <div className="herramientas__body">
            <h5 className="herramientas__titulo">Itinerarios interactivos</h5>
            <p className="herramientas__parrafo">
              Se acabaron los itinerarios aburridos hechos en word o en excel,
              mantener todo el viaje organizado nunca fue tan sencillo.
            </p>
          </div>
        </div>
        <div className="herramientas__explicacionHerrameintasApartado">
          <div className="herramientas__chat">
            <Chats />
          </div>
          <div className="herramientas__body">
            <h5 className="herramientas__titulo">Chat 24h</h5>
            <p className="herramientas__parrafo">
              Podrás comunicarte con tu cliente en cualquier momento y
              facilmente, enviar presupuestos, itinerarios y mensajes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herramientas
