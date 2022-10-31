import React from "react";
import { Nav, Logo, NavItem } from "./Navbar.styled";
import logoImg from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () =>{
    // navigate('login')
    sessionStorage.clear()
  }
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
        <NavItem to='/login' onClick={handleLogout}>Logout</NavItem>
      </ul>
    </Nav>
  );
};

export default Navbar;
