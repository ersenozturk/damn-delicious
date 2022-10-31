import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Quicksand', sans-serif;
    color: ${({ theme }) => theme.colors.colorGray}
}

body{
    background-color: ${({ theme }) => theme.colors.colorLight};
}
ul{
  list-style:none;  
}
a{
    text-decoration:none;
}
li{
    cursor:pointer;
}
`;

/* font-family: 'Teko', sans-serif; */
