import styled from "styled-components";


interface IInputProps{
  focus: boolean;
  value: string;
}



export const InputLabelStyled = styled.label<IInputProps>`

position: relative;
width: 100%;

:hover > svg{
  color: var(--blue)
}

:hover > span{
  color: var(--blue); 
}


span{
  position: absolute;
  z-index: 1;
  color: ${({focus})=> focus ? "#0390d5" : "#9a9c9e" };
  left: 40px;
  top: ${(props)=> props.focus || props.value ? -9 : 12 }px;
  font-size: ${(props)=> props.focus || props.value ? .8 : 1}rem;
  background-color: white;
  transition: all .2s;
  display: block;
  pointer-events: none;
}

svg{
  position: absolute;
  top: 11px;
  left: 10px;
  font-size: 1.25rem;
  transition: all .2s;
}

`;



export const InputStyled = styled.input`
border-radius: 5px;
font-size: 1.125rem;
padding: 10px 10px 10px 40px ;
border: 1px solid var(--gray-200);
outline: none;
transition: all .2s;
position: relative;
color: var(--gray-400);
width: 100%;

:hover{
  border-color:var(--blue);
}

::selection{
  background-color: var(--blue);
  color: var(--white)
}

:focus + svg{
  color: var(--blue);
}


:focus {
  box-shadow: 0px 0px 5px var(--blue);
  border-color:var(--blue);
}



`;




