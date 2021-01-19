import React, { useState } from "react";
import { FaBars, FaTimes, FaCalendarAlt } from "react-icons/fa";
import {
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Button,
} from "./Navbar.elements";
import Logo from "../../../images/logo_dark.png";

function Navbar() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleClick = () => setIsOpenMobileMenu(!isOpenMobileMenu);
  const closeMobileMenu = () => setIsOpenMobileMenu(false);

  document.body.addEventListener("click", () => {
    setIsOpenMobileMenu(false);
  });

  return (
    <React.Fragment>
      <NavbarContainer className="header">
        <MobileIcon onClick={handleClick}>
          {isOpenMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={isOpenMobileMenu}>
          <NavItem>
            <div className="bg-yellow-1 justify-center py-1 hidden logo-mobile">
              <img src={Logo} alt="logo" />
            </div>
          </NavItem>
          <NavItem>
            <NavLinks
              exact
              to="/"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/about-us"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              About Us
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/service"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Service
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/our-work"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Our Work
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/blog"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Blog
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/contact-us"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Contact Us
            </NavLinks>
          </NavItem>
        </NavMenu>
        <Button href="#form">
          <FaCalendarAlt className="mr-4" />
          <p>Appointment</p>
        </Button>
        <div className="logo-navbar hidden">
          <img src={Logo} alt="logo" />
        </div>
      </NavbarContainer>
    </React.Fragment>
  );
}

export default Navbar;
