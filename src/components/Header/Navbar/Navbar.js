import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
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
              Trang chủ
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/about-us"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Về chúng tôi
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/service"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Dịch vụ
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/our-work"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Sản phẩm
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/blog"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Tin tức
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="/contact-us"
              onClick={closeMobileMenu}
              activeClassName="active"
            >
              Liên hệ
            </NavLinks>
          </NavItem>
        </NavMenu>

        <div className="logo-navbar hidden">
          <img src={Logo} alt="logo" />
        </div>
      </NavbarContainer>
    </React.Fragment>
  );
}

export default Navbar;
