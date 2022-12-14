import styled from "styled-components";
import { Flex } from "../globalStyles/MyTags";

export const WrapperLeft = styled(Flex)`
  flex-direction: column;
  flex: 1;
  padding:1rem;
  gap:2rem;

  width: 100%;
  height:60vh;
  background-color: ${({ theme }) => theme.colors.colorLive}; 
  border-radius:15px;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height:auto;
  }
`;

export const Form = styled.form`
  display:grid;
  grid-template-columns: 1fr;
  gap:1rem;
  width:50%;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width:100%;
  }
`;
export const Select = styled.select`
  height:2rem;
  border-radius:5px;
  border:none;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 4px 0px inset;
  padding:0 .5rem;
  cursor:pointer;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height:3rem;
  }
`;
export const Input = styled.input`
  height:2rem;
  border-radius:5px;
  border:none;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 4px 0px inset;
  padding:0 .5rem;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height:3rem;
  }
`;
export const Button = styled.button`
  height:2rem;
  border-radius:5px;
  border:none;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 4px 0px inset;
  cursor:pointer;
  transition:  all .5s ease-in-out;
  &:hover{
    background-color: ${({ theme }) => theme.colors.colorGray};
    color: ${({ theme }) => theme.colors.colorLight};
    box-shadow: none;
    transform:scale(.9);
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height:3rem;
    color: ${({ theme }) => theme.colors.colorLight};
    background-color: ${({ theme }) => theme.colors.colorNight};
  }
`;