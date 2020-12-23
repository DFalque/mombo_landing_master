import React, { Component } from "react"

import Button from "./Button"

export class InputGroup extends Component {
  render() {
    return (
      <div className="que-buscamos__input-group">
        <input
          className="que-buscamos__input"
          type="text"
          placeholder="Envía un corre a mombo@gmail.com"
        />
        <div className="que-buscamos__desktop-button">
          <Button />
        </div>
      </div>
    )
  }
}

export default InputGroup
