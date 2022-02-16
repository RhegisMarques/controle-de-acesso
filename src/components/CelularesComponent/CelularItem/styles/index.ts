import styled from "styled-components";


export const ContainerStyled = styled.div`



display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
height: 50px;
line-height: 50px;
border-bottom: 1px solid var(--gray-200);

:hover{
  background-color: #ededed;
}


:hover .seta{
  color: var(--blue)
}

svg.remove{
  margin-left: 10px;
}

svg{
  font-size: 1.5rem;
  height: 40px;
  margin-top: 5px;
  transition: all .2s;
}

svg:hover {
  color: var(--blue);
  cursor: pointer;
}

`;