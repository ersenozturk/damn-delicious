import styled from "styled-components";
import {Flex} from '../globalStyles/MyTags'

export const SiteFooter = styled(Flex)`
justify-content:space-evenly;
position:absolute;
bottom:0;
left:0;
width:100%;
height:10vh;
background-color:${({theme})=>theme.colors.colorSun};
`;

export const Social = styled(Flex)`
    a{
        margin:0 5px;
        display:flex;
        align-items:center;
        cursor: pointer;
        
    }
`;