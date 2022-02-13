import styled from "styled-components"

export const ContainerModalContentStyled = styled.div`
padding: 40px;
position: relative;

.close{
  cursor: pointer;
  position: absolute;
  transition: all .2s;
  right: 20px;
  top: 15px;
  border: 1px solid var(--gray-200);
  border-radius: 3px;


  :hover{
    color: var(--blue)
  }
}



fieldset{
  padding: 10px;
  border: 1px solid var(--gray-200);
  border-radius: 5px;
  margin-bottom: 20px;
}

input[type="file"]{
  border: 1px solid var(--gray-200);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  background-color: white;
  
  
  :hover {
    border-color: var(--blue);
  }
}



.colaborador-primeira-div{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 15px 0;
  
  div:nth-child(2){
    margin-left: 10px;
    margin-right: 10px;
  }
}


.colaborador-segunda-div{
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  
  div:nth-child(2) {
    margin-left: 10px;
    margin-right: 10px;
  }
  
}

.celular, .notebook{
  margin: 15px 0;

  
  .wrapper1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 15px 0;

    div + div{
      margin-left: 10px;
    }
  }

}


`;