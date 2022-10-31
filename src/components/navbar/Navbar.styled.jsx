import styled from "styled-components";
import { Flex } from "../globalStyles/MyTags";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  font-family: "Quicksand", sans-serif;
  background-color: ${({ theme }) => theme.colors.colorSun};
  color: ${({ theme }) => theme.colors.colorNight};
  padding: 1rem 2rem;
  justify-content: space-between;
/* height:15vh; */

  ul {
    display: flex;
  }
`;
export const Logo = styled(Link)`
  justify-content: flex-start;
  img {
    width: 50%;
  }
`;

export const NavItem = styled(Link)`
      margin: 0 1rem;
      font-size:1.5rem;
      transition: all .3s ease-in-out;
      cursor: pointer;
      &:hover{
       transform:scale(1.2);
      }
      &:last-child {
      margin-right:0;
    }

`;
// font-family: 'Teko', sans-serif;
