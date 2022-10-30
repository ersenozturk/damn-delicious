import styled from "styled-components";
import { Flex } from "../globalStyles/MyTags";

export const WrapperLeft = styled(Flex)`
  justify-content: space-evenly;
  flex-direction: column;
  flex: 1;
  padding:1rem;

  /* width: 50%; */
  height:100%;
  background-color: ${({ theme }) => theme.colors.colorLive}; 
  border-radius:15px;

`;

export const MealForm = styled.form`
  display:grid;
  grid-template-columns: 1fr;
`;
export const Select = styled.select`
  
`;
export const Input = styled.input`
  
`;
export const Button = styled.button`
  
`;