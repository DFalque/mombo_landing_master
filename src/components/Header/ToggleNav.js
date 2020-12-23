import React, { Component } from "react"

export class ToggleNav extends Component {
  render() {
    const { toggle } = this.props
    return (
      <button onClick={toggle} className="header__toggle">
        <i class="bi bi-list header__icon"></i>
      </button>
    )
  }
}

export default ToggleNav
