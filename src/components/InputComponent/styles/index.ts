import styled from "styled-components";


interface IInputProps{
  focus: boolean
}

export const InputContainer = styled.div<IInputProps>`
position: relative;


svg{
  position: absolute;
  top: 11px;
  left: 10px;
  font-size: 1.25rem;
  transition: all .2s;



}


span{
  position: absolute;
  z-index: 1;
  color: ${({focus})=> focus ? "#5443d7" : "#9a9c9e" };
  left: 40px;
  top: ${({focus})=> focus ? -9 : 12 }px;
  font-size: ${({focus})=> focus ? .8 : 1}rem;
  padding: 0 ${({focus})=> focus ? 2 : 0 }px;
  background-color: white;
  transition: all .2s;
  display: block;
  pointer-events: none;
}

`;




export const InputStyled = styled.input`

border-radius: 5px;
font-size: 1.125rem;
padding: 10px 10px 10px 40px ;
border: none;
border: 1px solid var(--gray-200);
outline: none;
transition: all .2s;
position: relative;
color: var(--grey-200);


:hover{
  border-color:var(--violet);
}

::selection{
  background-color: var(--violet);
  color: var(--white)
}

:focus + svg, :hover + svg{
  color: var(--violet);
}

:focus {
  box-shadow: 0px 0px 5px var(--violet);
}



`;

