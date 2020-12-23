import React, { Component } from "react"
import { sectionIds } from "../../constants/sections"
import { getAnchorLink } from "../../utils/links"

import Links from "./Links/index"

export class Nav extends Component {
  render() {
    const link = getAnchorLink(sectionIds.queBuscamos)
    return (
      <>
        <div className="header__nav">
          <Links />
        </div>
        <div className="header__containerBottom">
          <a className="header__contact" href={link}>
            Contacto
          </a>
        </div>
      </>
    )
  }
}

export default Nav
