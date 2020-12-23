import React, { Component } from "react"
import PageLink from "./PageLink"

import { sectionIds } from "../../../constants/sections"

export class Links extends Component {
  render() {
    return (
      <>
        <PageLink id={sectionIds.nosotros}>Sobre Nosotros</PageLink>
        <PageLink id={sectionIds.agencias}>Agencias</PageLink>
        <PageLink id={sectionIds.particulares}>Particulares</PageLink>
        <PageLink id={sectionIds.queBuscamos}>¿Qué Buscamos?</PageLink>
      </>
    )
  }
}

export default Links
