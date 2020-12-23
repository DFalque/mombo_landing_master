import React, { Component } from "react"
import { sectionIds } from "../../constants/sections"

import InputGroup from "./InputGroup/index"
import Button from "./InputGroup/Button"

export class QueBuscamos extends Component {
  render() {
    return (
      <div className="que-buscamos" id={sectionIds.queBuscamos}>
        <div className="que-buscamos__body">
          <h2 className="que-buscamos__title">¿Qué buscamos?</h2>
          <p className="que-buscamos__subtitle">
            Actualmente estamos en fase de desarrollo, puedes colaborar con
            nosotros de diferentes maneras. Envíanos un email y te responderemos
          </p>
          <InputGroup />
          <div className="que-buscamos__mobile-button">
            <Button />
          </div>
        </div>
      </div>
    )
  }
}

export default QueBuscamos
