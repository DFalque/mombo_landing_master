import React, { Component } from "react"

import Nav from "./Nav"

export class MobileNav extends Component {
  render() {
    return (
      <div className="header__mobile">
        <Nav />
      </div>
    )
  }
}

export default MobileNav
