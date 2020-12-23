import React from "react"

import LogoMombo from "../image"
import MobileNav from "./MobileNav"
import ToggleNav from "./ToggleNav"
import DesktopNav from "./DesktopNav"

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))

  render() {
    const { isOpen } = this.state
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__container">
            <div className="header__containerLogo">
              <div className="header__logo">
                {" "}
                <LogoMombo />
              </div>
              <h3 className="header__tittleLogo">mombo</h3>
            </div>
            <DesktopNav />
            <ToggleNav toggle={this.toggle} />
            {isOpen && <MobileNav />}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
