import styled from "styled-components";
import { Flex } from "../../components/globalStyles/MyTags";

export const Container = styled(Flex)`
  height: 75vh;

  background-color: ${({ theme }) => theme.colors.colorGray};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.colorLive};
  padding: 5rem;
  border-radius: 10%;
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
`;
export const Button = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 10%;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: ${({ theme }) => theme.colors.colorGray};
    color: ${({ theme }) => theme.colors.colorSun};
  }
`;
