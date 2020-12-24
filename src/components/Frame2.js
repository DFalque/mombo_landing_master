import React, { Component } from "react"

export class Frame2 extends Component {
  render() {
    return (
      <iframe
        className="video__embed"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BVuS3Fje-Pw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    )
  }
}

export default Frame2
