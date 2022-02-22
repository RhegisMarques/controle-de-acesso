import styled from "styled-components"


interface IColaboradorItemStyled {
  isOpen: boolean
}


export const ColaboradorItemStyled = styled.div<IColaboradorItemStyled>`
border-bottom: 1px solid var(--gray-200);
padding: 10px 0;
overflow: hidden;
transition: all .2s;
height: ${({isOpen}) => isOpen ? 320 : 45}px;


.seta{
  transition: all .2s;
  transform: rotate(${({isOpen})=> isOpen ? "90deg" : "0"});
}


svg + svg{
  margin-left: 10px;
}

svg {
  font-size: 1.5rem;
  
  
  :hover{
    cursor: pointer;
  }
}


:hover{
  background-color: #f4f4f4;
}


`;



interface IWrapperShowContentStyled {
  editable: boolean
}


export const WrapperShowContentStyled = styled.form<IWrapperShowContentStyled>`

display: grid;
grid-template-columns: 1fr 1fr 3fr 1fr 1fr;

input{
  transition: all .2s;
  font-size: 1rem;
  padding: 5px;
  border: 1px solid ${({editable}) => editable ? "var(--gray-200)" : "transparent"} ;
  border-radius: 5px;
  background-color: transparent;
  display: block;
  width: 90%;
  outline: none;
}





`;






export const WrapperHiddenContentStyled = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
padding: 15px 0;
border: 1px solid blue;



.wrapper1{
  
  display: grid;
  grid-template-columns: 1fr 2fr;
  

  .wrapImg{
    img{
      height: 200px;
      display: block;
    }
  }
  
  .wrap1-context{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  }


}



`;



