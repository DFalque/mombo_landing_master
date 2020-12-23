import React, { Component } from "react"
import Image from "gatsby-image"

import ToggleVideo from "../ToggleVideo"

export class Preview extends Component {
  render() {
    const { showVideo, videoImage } = this.props
    return (
      <>
        {videoImage && (
          <Image
            fluid={videoImage.childImageSharp.fluid}
            alt="Video"
            className="video__preview"
          />
        )}
        <ToggleVideo show={showVideo} />
      </>
    )
  }
}

export default Preview
