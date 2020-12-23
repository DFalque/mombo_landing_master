import React, { Component } from "react"

export class CloseButton extends Component {
  render() {
    const { close } = this.props
    return (
      <button onClick={close} className="app__video__header__close">
        <i className="bi bi-x"></i>
      </button>
    )
  }
}

export default CloseButton
