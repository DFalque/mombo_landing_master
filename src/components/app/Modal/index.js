import React, { Component } from "react"
import Frame from "../../Frame"

import CloseButton from "../../CloseButton"

export class Modal extends Component {
  render() {
    const { close } = this.props
    return (
      <div className="app__video">
        <div className="app__video__contents">
          <div className="app__video__header">
            <CloseButton close={close} />
          </div>
          <h1>App móvil para usuarios</h1>
          <Frame />
        </div>
      </div>
    )
  }
}

export default Modal
