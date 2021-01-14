import React, { Component } from "react"
import Frame3 from "./Frame3"

import CloseButton from "./CloseButton"

export class Modal2 extends Component {
  render() {
    const { close } = this.props
    return (
      <div className="nosotros__video">
        <div className="nosotros__video__contents">
          <div className="nosotros__video__header">
            <CloseButton close={close} />
          </div>
          <h1>Presentación Mombo</h1>
          <Frame3 />
        </div>
      </div>
    )
  }
}

export default Modal2
