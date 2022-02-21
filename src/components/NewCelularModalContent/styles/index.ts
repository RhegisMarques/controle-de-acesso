import styled from "styled-components";



export const NewCelularContainer = styled.form`

padding: 30px;





fieldset{
  
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px 10px;
  max-width: 100%;
  

  label + label{
    margin-left: 10px;
  }


  input{
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    outline: none;
    width: 100%;
    border: 1px solid var(--gray-200);
  }
  
}


.div-btns{
  display: flex;
  justify-content: end;
  margin-top: 20px;

  button{
    width: 20%;
  }

  button + button{
    margin-left: 15px;
  }
}


`;