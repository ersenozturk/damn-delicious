import React from "react";
import { Nav, Logo, NavItem } from "./Navbar.styled";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">
        <img src={logoImg} alt="" />
      </Logo>
      <ul>
        <NavItem to="about">About</NavItem>
        <NavItem
          target="_blank"
          onClick={() => {
            return (window.location.href =
              "https://github.com/ersenozturk/elegant-dishes");
          }}
        >
          Source_Code
        </NavItem>
        <NavItem onClick={() => sessionStorage.clear()}>Logout</NavItem>
      </ul>
    </Nav>
  );
};

export default Navbar;
