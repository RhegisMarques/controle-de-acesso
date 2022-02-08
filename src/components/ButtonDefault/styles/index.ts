import styled from "styled-components";
import { darken } from "polished";


export const ButtonDefaultStyled = styled.button`

display: block;
border-radius: 5px;
background-color: var(--blue);
color: var(--white);
width: 100%;
padding: 10px;
font-weight: 500;
border: none;
font-size: 1.125rem;
transition: background-color .2s;

:hover {
  background-color: ${ darken(0.04, "#0390d5")};
}

:active{
  background-color: ${ darken(0.1, "#0390d5")};
}
`;