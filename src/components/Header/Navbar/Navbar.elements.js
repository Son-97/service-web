import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: #f7f7f7;
  align-items: center;
  font-size: 1.2rem;
  margin-top: -35px;
  position: relative;
  z-index: 99;
  .logo-navbar {
    padding: 4px;
  }
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media screen and (max-width: 818px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    .logo-navbar {
      display: block;
    }
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    position: absolute;
    height: 90vh;
    z-index: 9999;
    top: 0px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    justify-content: flex-start;
  }
`;

export const NavItem = styled.li`
  padding-top: 12px;
  padding-bottom: 12px;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid #ddbb00;
    padding: 0px;
    &:hover {
      border: none;
      background-color: #ddbb00;
      transition: all 0.5s;
      a {
        color: #fff;
      }
    }
    & .logo-mobile {
      display: flex;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(NavLink)`
  display: block;
  font-size: 16px;
  cursor: pointer;
  color: #202020;
  text-transform: capitalize;
  padding: 10px 15px;
  margin-right: 10px;
  font-weight: 500;
  position: relative;
  &.active {
    color: #ddbb00;
  }
  &:hover {
    color: #ddbb00;
  }

  @media screen and (max-width: 818px) {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 16px 22px;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const Button = styled.a`
  display: block;
  font-size: 16px;
  cursor: pointer;
  color: #202020;
  text-transform: capitalize;
  padding: 22px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ddbb00;
  &:hover {
    background-color: black;
    color: #ddbb00;
    p {
      transform: rotate(360deg);
      transition: all 0.8s ease;
    }
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: ${({ isOpenMobileMenu }) => (isOpenMobileMenu ? "block" : "none")};
    position: fixed;
    width: 100%;
    height: 100%;
    top: 125px;
    left: 0;
    transition: opacity 0.25s;
    background: #0b0b0b;
    opacity: 0.6;
    z-index: 2;
  }
`;
