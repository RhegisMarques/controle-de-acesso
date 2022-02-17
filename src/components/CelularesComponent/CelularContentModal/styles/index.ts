import styled from "styled-components";




export const ContainerStyled = styled.form`
padding: 40px;


.div-btns{
  display: flex;
  margin-top: 30px;
  justify-content: end;
  
  
  
  button{
    max-width: 200px;
  }
  
  button + button {
    margin-left: 10px;
  }
  
}



`;





export const WrapperCelular = styled.fieldset`
padding: 20px;
border-radius: 10px;
border: 1px solid var(--gray-200);

legend{
  font-size: 1.5rem;
}

input{ 
  width: 100%;
  border: 1px solid var(--gray-200);
  border-radius: 5px;
  padding: 10px;
  outline: none;
  font-size: 1rem;
  
  
  :hover {
    border-color: var(--blue);
  }
}


.wrapper-atributos-celular{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  
  div + div{
    margin-left: 10px;
  }
  
  
  
}



.div-input-file{
    background-color: white;
    width: 100%;
    margin-top: 20px;
  }

`;



