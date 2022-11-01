import styled from "styled-components";
import { Flex } from "../../components/globalStyles/MyTags";
import { Link } from "react-router-dom";

export const Wrapper = styled(Flex)`
  height: 80vh;
  position: absolute;
  top: 12vh;
  left: 0;
  right: 0;


background-color: ${({ theme }) => theme.colors.colorNight};
  padding:2rem;
  h2 {
    color: ${({ theme }) => theme.colors.colorLight};
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction:column;
    padding:1rem ;

  }
`;

export const PurposeUL = styled(Flex)`
  justify-content: space-center;
  width:100%;
  flex-wrap:wrap;
  gap:1rem;
`;

export const PurposeLi = styled(Link)`
  color: ${({ theme }) => theme.colors.colorSun};
  display: inline-block;
  padding: 1rem 2rem;
  border: 1px solid;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.colorNight};
    background-color: ${({ theme }) => theme.colors.colorSun};
  }
`;



export const WrapperRight = styled(Flex)`
  justify-content: center;
  align-items:stretch;
  /* width: 100px; */
  flex-direction: column;
  flex: 1;
  padding:0 1rem;
  height:100%;
  gap:2rem;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    margin-top:2rem;
    gap:1rem;
    width:100%;
  }
`;


export const Oops = styled(Flex)`
flex-direction:column;
  h2{
    margin-bottom:1rem;
  }
  img{
    width:50%;
    border-radius:10%;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    img{
    display:none;
  }
  }
`;


