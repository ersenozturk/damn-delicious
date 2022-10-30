import styled from "styled-components";

export const Flex = styled.div`
  display:flex;
  justify-content:${({j})=> j ? j : 'center' };
  align-items: ${({a})=> a ? a : 'center'};
  flex-wrap: ${({w})=> w && 'wrap'};
`;
