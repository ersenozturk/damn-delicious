import styled from "styled-components";
import { Flex } from "../globalStyles/MyTags";

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  color: ${({ theme }) => theme.colors.colorSun};
  height: 100%;
  gap: 0.4rem;
  @media (max-width: 455px) {
    grid-template-columns: repeat(3, 1fr);

  }
`;

export const Card = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.colorLight};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  p {
    color: ${({ theme }) => theme.colors.colorGray};
    font-size: 0.8rem;
    text-align: center;
    font-weight: bold;
  }
  button {
    border: none;
    font-weight: bolder;
    padding: 0.2rem 0.4rem;
    background-color: ${({ theme }) => theme.colors.colorSun};
    cursor: pointer;
    width: 100%;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  &:hover {
    button {
      background-color: ${({ theme }) => theme.colors.colorNight};
      color: ${({ theme }) => theme.colors.colorSun};
    }
  }
`;

export const ImgDiv = styled.div`
  img {
    width: 5rem;
    height: auto;
    border-radius: 5px;
  }
`;
