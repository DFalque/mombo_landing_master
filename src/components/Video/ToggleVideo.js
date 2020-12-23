import React, { Component } from "react"

export class ToggleVideo extends Component {
  render() {
    const { show } = this.props
    return (
      <button className="video__button" onClick={show}>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="video__icon"
        >
          <path
            d="M100 183.333C146.024 183.333 183.333 146.024 183.333 100C183.333 53.9762 146.024 16.6666 100 16.6666C53.9762 16.6666 16.6666 53.9762 16.6666 100C16.6666 146.024 53.9762 183.333 100 183.333Z"
            stroke="white"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M83.3334 66.6666L133.333 100L83.3334 133.333V66.6666Z"
            stroke="white"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    )
  }
}

export default ToggleVideo
