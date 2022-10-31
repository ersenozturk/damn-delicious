import styled from "styled-components";
import { Flex } from "../../components/globalStyles/MyTags";

export const Container = styled(Flex)`
  /* height: 75vh; */

  background-color: ${({ theme }) => theme.colors.colorGray};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.colorLive};
  padding: 5rem;
  border-radius: 10%;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  h1 {
    text-align: center;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 10%;
  border: none;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;
export const Button = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 10%;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  &:hover{
    background-color: ${({ theme }) => theme.colors.colorGray};
    color: ${({ theme }) => theme.colors.colorSun};
  }
`;
