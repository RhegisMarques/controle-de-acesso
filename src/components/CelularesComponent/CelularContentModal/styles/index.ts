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
display: grid;
grid-template-columns: repeat(4, 1fr);

legend{
  font-size: 1.5rem;
}

div + div{
  margin-left: 10px
}


`;