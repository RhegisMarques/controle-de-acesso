import styled from "styled-components";


export const ButtonLoginStyled = styled.button`

display: block;
border-radius: 5px;
background-color: var(--violet);
color: var(--white);
width: 100%;
padding: 10px;
font-weight: 400;
border: none;
font-size: 1.125rem;
transition: filter .2s;

:hover {
  filter: brightness(.9);
}

:active{
  filter: brightness(.7)
}
`;