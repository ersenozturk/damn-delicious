import React from "react";
import { Nav, Logo, MenuLink, Menu } from "./Navbar.styled";
import logoImg from "../../assets/logo.png";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav j="space-between" wrap="wrap">
      <Logo to="/">
        <img src={logoImg} alt="damn delicious" />
      </Logo>

      {/* <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger> */}

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
