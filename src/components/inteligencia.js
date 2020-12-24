import React from "react"

const Inteligencia = () => {
  return (
    <div className="inteligencia__contenedor">
      <div className="inteligencia__introduccion">
        <p className="inteligencia__parrafoIntroduccion">
          Inteligencia artificial
        </p>
        <h2 className="inteligencia__tituloIntroducccion">
          El comienzo de los viajes inteligentes.
        </h2>
      </div>
      <div className="inteligencia__explicacion">
        <div className="inteligencia__apartado">
          {" "}
          <div className="inteligencia__contenedorNumero">
            <h1 className="inteligencia__numero">1</h1>
          </div>
          <h5 className="inteligencia__titulo">Recopilación de datos</h5>
          <p className="inteligencia__parrafo">
            Recogemos el comportamiento de los usuarios, los viajes reservados y
            de los itinerarios y los almacenamos en nuestra base de datos.
          </p>
        </div>
        <div className="inteligencia__apartado">
          {" "}
          <div className="inteligencia__contenedorNumero">
            <h1 className="inteligencia__numero">2</h1>
          </div>
          <h5 className="inteligencia__titulo">Aplicación de Algoritmos</h5>
          <p className="inteligencia__parrafo">
            Aplicamos técnicas de Machine learning a nuestra base de datos, para
            identificar patrones, tendencias y clasificación de usuarios.
          </p>
        </div>
        <div className="inteligencia__apartado">
          {" "}
          <div className="inteligencia__contenedorNumero">
            <h1 className="inteligencia__numero">3</h1>
          </div>
          <h5 className="inteligencia__titulo">Clasificación de patrones</h5>
          <p className="inteligencia__parrafo">
            Recogemos los patrones más relevantes y clasificamos a los viajeros
            según su comportamiento.
          </p>
        </div>
        <div className="inteligencia__apartado">
          {" "}
          <div className="inteligencia__contenedorNumero">
            <h1 className="inteligencia__numero">4</h1>
          </div>
          <h5 className="inteligencia__titulo">Soluciones a medida</h5>
          <p className="inteligencia__parrafo">
            Utilizamos los resultados para mejorar nuestras plataforma y poner
            nuevas herramientas más inteligentes al servicio de las agencias de
            viaje.
          </p>
        </div>{" "}
        <div className="inteligencia__fondo">
          <h1 className="inteligencia__fondoTexto">mombo</h1>
        </div>
      </div>
    </div>
  )
}

export default Inteligencia
