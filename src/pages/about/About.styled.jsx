import styled from "styled-components";

export const Main = styled.div`
  height: 75vh;
  width: 100%;
  margin: auto;
  color: orange;
  text-align: center;
  margin-bottom: 3rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    li{
        margin:1rem;
    }
  }
`;
export const Img = styled.img`
  width: 50%;
  height: 30vh;
`;

export const A = styled.a`
  color: orange;
  &:hover {
    color: black;
  }
`;
