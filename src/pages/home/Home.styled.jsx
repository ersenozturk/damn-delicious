import styled from "styled-components";
import { Flex } from "../../components/globalStyles/MyTags";
import { Link } from "react-router-dom";

export const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.colorNight};
  height: 75vh;
  padding:2rem;
  h2 {
    color: ${({ theme }) => theme.colors.colorLight};
    text-align: center;
    /* padding-top: 2rem; */
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
  /* margin: 1rem; */
  border-radius: 5px;
  width: 10rem;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.colorNight};
    background-color: ${({ theme }) => theme.colors.colorSun};
  }
`;



export const WrapperRight = styled(Flex)`
  justify-content: space-center;
  flex-direction: column;
  flex: 1;
  padding:1rem;
  height:100%;
  /* width: 50%; */
  gap:2rem;
`;

