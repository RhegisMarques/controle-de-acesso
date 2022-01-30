import styled from "styled-components";


interface IInputProps{
  placeHolder : string
}

export const InputContainer = styled.div<IInputProps>`
position: relative;
margin-top: 10px;
margin-left: 10px;



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

:focus + svg, :hover + svg {
  color: var(--violet);
}

:focus {
  box-shadow: 0px 0px 5px var(--violet);
}


`;



// export const InputContainer = styled.div<IInputProps>`
// position: relative;
// margin-top: 10px;


// svg{
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   font-size: 1.25rem;
//   transition: all .2s;

// }

// input{
//   border-radius: 5px;
//   font-size: 1.125rem;
//   padding: 10px 10px 10px 40px ;
//   border: none;
//   border: 1px solid var(--gray-200);
//   outline: none;
//   transition: all .2s;
//   position: relative;

//   :hover{
//     border-color:var(--violet);
//   }

//   :focus + svg, :hover + svg {
//     color: var(--violet);
//   }

//   :focus {
//     box-shadow: 0px 0px 5px var(--violet);
//   }



