import React, { Component } from "react"

import Frame from "../Frame"
import CloseButton from "../CloseButton"

export class Content extends Component {
  render() {
    const { close } = this.props
    return (
      <div className="video__content">
        <div className="video__content__header">
          <CloseButton close={close} />
        </div>
        <Frame />
      </div>
    )
  }
}

export default Content
