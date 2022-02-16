import styled from "styled-components";



interface IColaboradorContentProps {
  clicked: boolean
}




export const ColaboradorContentStyled = styled.div<IColaboradorContentProps>`
width: 100%;
border-bottom: 1px solid var(--gray-200);
height: ${ ({clicked}) => clicked ? 260 : 40 }px;
line-height: 40px;
overflow: hidden;
transition: all .3s;
background-color: ${ ({clicked})=> clicked ? "#ededed" : "white" };


:hover {
  background-color: var(--white);
}

svg.seta{
  transition: all .2s;
  transform: rotate(${ ({clicked})=> clicked ? "90deg" : 0 });
}



svg.remove{
  margin-left: 10px;
}

svg{
  font-size: 1.5rem;
  height: 40px;
}

svg:hover {
  color: var(--blue);
  cursor: pointer;
}




.colaborador-hidden-content{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 10px;
  padding-right: 10px;
}

`;





export const ColaboradorDataContent = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 2fr 2fr 1fr;




`;