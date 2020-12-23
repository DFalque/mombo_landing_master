import React, { Component } from "react"
import { getAnchorLink } from "../../../utils/links"

export class PageLink extends Component {
  render() {
    const { id, ...other } = this.props
    const link = getAnchorLink(id)
    return <a href={link} className="header__link" {...other}></a>
  }
}

export default PageLink
