import styled from "styled-components";
import { Flex } from "../../components/globalStyles/MyTags";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: space-between;
`;
export const Info = styled(Flex)`
  height: 20vh;
  justify-content: space-evenly;
  margin: 1rem 2rem;
  gap: 1rem;
  h1 {
    font-size: 3rem;
  }
  ul {
    display: flex;
    gap: 1rem;
    width: 100%;
    li {
      padding: 0.3rem 1rem;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.colorLive};
    }
  }
`;

export const DivImg = styled(Flex)`
  img {
    width: 50%;
    border-radius: 50%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;
export const DivExtra = styled(Flex)`
  height: 55vh;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.colorNight};
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li,
    span {
      color: ${({ theme }) => theme.colors.colorLight};
    }
  }
`;

export const DivExtra2 = styled(Flex)`
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items:start;
  h4 {
    color: ${({ theme }) => theme.colors.colorLight};
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.colors.colorLight};
  }
`;
