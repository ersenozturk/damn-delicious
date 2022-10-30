import styled from "styled-components";
import { Flex } from "../../components/globalStyles/MyTags";
import {Link} from 'react-router-dom';

export const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.colorNight};
  height:75vh;
  h2 {
    color: ${({ theme }) => theme.colors.colorLight};
    text-align: center;
    padding-top: 2rem;
  }
`;

export const PurposeUL = styled(Flex)`
  justify-content: space-evenly;
`;

export const PurposeLi = styled(Link)`
    color: ${({ theme }) => theme.colors.colorSun};
    display: inline-block;
    padding: 1rem 2rem;
    border:1px solid ;
    margin: 3rem;
    border-radius: 5px;
    width:10rem;
    text-align: center;
    &:hover{
        color:${({ theme }) => theme.colors.colorNight};
        background-color:${({ theme }) => theme.colors.colorSun};
    
  }
`