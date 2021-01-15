import React from "react"
import LogoMombo from "./image"

const Footer = () => {
  return (
    <footer className="footer__footer">
      <div className="footer__footer_container"></div>
      <div className="containerFooter">
        <div className="footer__logo-container">
          <LogoMombo />
        </div>
        <h3 className="footer__title">mombo</h3>
      </div>
      <p className="footer__correo">mombo.viajes@gmail.com</p>
      <p className="footer__copywrite">
        Copyright {new Date().getFullYear()} By Mombo S.L
      </p>
    </footer>
  )
}
export default Footer
