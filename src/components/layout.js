import React from "react"

import Header from "./Header/index"
import Hero from "./Hero"
import Nosotros from "./nosotros"
import Agencias from "./Agencias"
import App from "./app/index"
import Tecnologia from "./Tecnologia"
import Herramientas from "./Herramientas"
import Inteligencia from "./inteligencia"
import Clientes from "./Clientes/index"
import Particulares from "./particulares"
import Buscar from "./Buscar/index"
import Footer from "./footer"
import Video from "./Video"
import CallToAction from "./CallToAction"
import QueBuscamos from "./QueBuscamos/index"

const Layout = ({
  data: { site, videoImage, imgParticulares, nosotrosImage },
}) => {
  return (
    <>
      <Header siteTitle={site.siteMetadata?.title || `Title`} />
      <Hero />
      <div className="layout__main">
        <main>
          {" "}
          <Nosotros image={nosotrosImage} />
          <Agencias />
          <Video videoImage={videoImage} />
          <App />
          <Tecnologia />
          <CallToAction />
          <Herramientas />
          <Inteligencia />
          <Clientes />
          <Particulares image={imgParticulares} />
          <QueBuscamos />
          <Buscar />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
