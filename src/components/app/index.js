import React, { useState } from "react"

import ImgApp from "./App"
import Modal from "./Modal"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  return (
    <>
      <div className="app__contenedorApp">
        <p className="app__Nuestra">Nuestra App</p>

        <div className="app__explicacionApp">
          <div className="app__explicacionAppTexto">
            <h2 className="app__defination">
              Ya no es necesario que gastes tus recursos y tiempo en desarrollar
              aplicaciones y páginas web, aquí tienes todo.
            </h2>
            <p className="app__deffination2">
              Hemos construido nuestra aplicación con el máximo cuidado posible,
              con una experiencia de usuario excepcional para hacer todo más
              facil y atractivo.
            </p>
            <div style={{ marginTop: "60px" }}>
              <button className="app__varapp" onClick={open}>
                Ver App
              </button>
            </div>
          </div>
          <div className="app__image-column">
            {" "}
            <ImgApp className="app__image" />
          </div>
        </div>
      </div>
      {isOpen && <Modal close={close} />}
    </>
  )
}

export default App
