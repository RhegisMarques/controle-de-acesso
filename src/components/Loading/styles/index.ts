import styled from "styled-components";

import {transparentize} from "polished"


export const LoadContainer = styled.div`
display: hidden;
opacity: 0;
background-color: ${transparentize(.2, "#f2f6f9")};
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 2;
height: 100vh;
justify-content: center;
pointer-events: none;
align-items: center;
transition: all .3s;



&.visibled{
  opacity: 1;
  display: flex;
}
`;