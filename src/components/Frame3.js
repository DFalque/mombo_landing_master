import React, { Component } from "react"

export class Frame3 extends Component {
  render() {
    return (
      <iframe
        className="video__embed"
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=8b2c8_lHgoQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    )
  }
}
export default Frame3
