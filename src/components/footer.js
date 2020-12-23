import React from "react"
import LogoMombo from "./image"

const Footer = () => {
  return (
    <footer className="footer__footer">
      <div className="footer__footer_container"></div>
      <div className="footer__logo-container">
        <LogoMombo className="footer__logo" />
      </div>
      <h3 className="footer__title">mombo</h3>
      <p className="footer__copywrite">
        Copyright {new Date().getFullYear()} By Mombo S.L
      </p>
    </footer>
  )
}

export default Footer
