import React, { Component } from "react"

export class Frame extends Component {
  render() {
    return (
      <iframe
        className="video__embed"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HwgFG9Prr8g"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    )
  }
}

export default Frame
