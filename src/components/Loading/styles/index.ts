import styled from "styled-components";

import {transparentize} from "polished"


interface ILoadProps {
  load: boolean
}

export const LoadContainer = styled.div<ILoadProps>`
display: ${ ({load})=> load ? "flex" : "none"};
opacity: ${ ({load})=> load ? 1 : 0};
background-color: ${transparentize(.2, "#f2f6f9")};
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 2;
height: 100vh;
justify-content: center;
align-items: center;
transition: all 5s linear;

`;