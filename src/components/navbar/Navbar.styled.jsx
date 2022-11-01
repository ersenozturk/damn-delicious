import styled from "styled-components";
import { Flex } from "../globalStyles/MyTags";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  font-family: "Quicksand", sans-serif;
  background-color: ${({ theme }) => theme.colors.colorSun};
  color: ${({ theme }) => theme.colors.colorNight};
  padding: 1rem 2rem;
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:12vh;
  @media (max-width: 490px) {
    padding: 1rem;
  }

`;

export const Logo = styled(Link)`
  img {
    width: 40%;
  }
  @media (max-width: 490px) {
    img {
      width: 60%;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.colorNight};
  font-size: 3rem;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: block;
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    /* flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in; */
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.colorNight};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainLive};
    transform: scale(1.2);
  }
  /* @media (max-width: ${({ theme }) => theme.screens.md}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.mainLight};
    width: 100%;
  } */
`;
