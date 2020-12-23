import React from "react"

import Map from "./Map"

const Clientes = () => {
  return (
    <div className="clientes__contenedor">
      <div className="clientes__contenedor"></div>
      <p className="clientes__PARA">PARA VIAJEROS</p>
      <h2 className="clientes__client">Preparados para el cliente 2.0</h2>
      <p className="clientes__para">
        Mombo ha sido creado orientandose en el deseo de los viajeros.
      </p>
      <h2 className="clientes__para2">
        “Hemos encuestado a miles de viajeros de diferentes países para conocer
        que es lo que quieren y nosotros se lo hemos traído ”
      </h2>
      <Map className="clientes__map" />
    </div>
  )
}

export default Clientes
