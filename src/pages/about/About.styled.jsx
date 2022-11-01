import styled from "styled-components";
import { Flex } from "../../components/globalStyles/MyTags";

export const Main = styled(Flex)`
  height: 80vh;
  position: absolute;
  top: 12vh;
  left: 0;
  right: 0;

  flex-direction: column;
  width: 100%;
  margin: auto;
  color: orange;
  text-align: center;
  margin-bottom: 3rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 1rem;
    }
  }
`;
export const Img = styled.img`
  width: 50%;
  /* height: 30vh; */
`;

export const A = styled.a`
  color: orange;
  &:hover {
    color: black;
  }
`;
