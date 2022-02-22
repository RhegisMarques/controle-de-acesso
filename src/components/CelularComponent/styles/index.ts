import styled from "styled-components";



interface ICelularContainerProps {
  isOpen: boolean;
}



export const CelularContainerStyled = styled.div<ICelularContainerProps>`

padding: 10px 0;
border-bottom: 1px solid var(--gray-200);
overflow: hidden;
height: ${({isOpen})=> isOpen ? 180 : 45}px;
transition: all .2s;

:hover{
  background-color: #f4f4f4;
}

.hidden-content{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  
  img{
    height: 120px;
    display: block;
  }
  
  div{
    margin-left: 20px;
    color: var(--gray-400);
    
    p + p{
      margin-top: 10px;
    }
    
    
    label{
      margin-top: 10px;
      display: block;
      
      input{
        border: 1px solid var(--gray-200);
        padding: 5px;
        border-radius: 5px;
        background-color: transparent;
      }
      
    }
    
  }
  
  .div-btns{
    display: flex;
    
    
    button + button{
      margin-left: 15px;
    }

    button:disabled{
      cursor: not-allowed;
      background-color: var(--gray-200)
    }
  }
  
}

`;







interface IWrapperCelularDataProps {
  editable: boolean;
  isOpen: boolean;
}


export const WrapperCelularData = styled.div<IWrapperCelularDataProps>`

display: grid;
grid-template-columns: 1fr repeat(4, 2fr) 1fr;

div{
  input{
    transition: all .2s;
    height: 100%;
    width: 80%;
    background-color: transparent;
    font-size: 1rem;
    border: 1px solid ${({editable})=> editable ?  "#9a9c9e" : "transparent"};
    border-radius: 5px;
    outline: none;
    color: ${({editable})=> editable ?  "black" : "#5d5e62"};
  }
}

svg{
  font-size: 1.5rem;
  cursor: pointer;
}

svg + svg {
  margin-left: 10px;
}


.seta{
  transition: all .2s;
  transform: rotate(${({isOpen})=> isOpen ? "90deg" : "0"});
}

`;




