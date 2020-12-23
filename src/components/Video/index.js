import React, { Component } from "react"

import Preview from "./Preview"
import Content from "./Content"

export class Video extends Component {
  state = {
    showVideo: false,
  }

  setShowVideo = showVideo => this.setState({ showVideo })

  showVideo = () => this.setShowVideo(true)

  hideVideo = () => this.setShowVideo(false)

  render() {
    const { videoImage } = this.props
    const { showVideo } = this.state
    return (
      <div className="video">
        {showVideo ? (
          <Content close={this.hideVideo} />
        ) : (
          <Preview videoImage={videoImage} showVideo={this.showVideo} />
        )}
      </div>
    )
  }
}

export default Video
