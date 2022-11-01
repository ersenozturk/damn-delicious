import styled from "styled-components";
import {Flex} from '../globalStyles/MyTags'

export const SiteFooter = styled(Flex)`
justify-content:space-evenly;
position:fixed;
bottom:0;
left:0;
right:0;
padding:1rem;
width:100%;
height:8vh;
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