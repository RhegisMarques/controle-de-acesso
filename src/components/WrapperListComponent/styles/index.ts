import styled from "styled-components"



export const WrapperListStyled = styled.div`


background-color: white;
padding: 20px;
border-radius: 5px;
border: 1px solid var(--gray-200);

`;



interface IWrapperTitleListProps {
  columns: number[]
}

export const WrapperTitleListStyled = styled.div<IWrapperTitleListProps>`

border-bottom: 1px solid var(--gray-200);

display: grid;
grid-template-columns: 1fr ${({columns}) => columns.map( el => el + "fr " ) };


p{
  font-weight: 600;
}


.reactjs-icon{
  animation: rotate 5s linear infinite;
  
  
  @keyframes rotate{
    from {
      transform: rotate(0);
    }
    
    to {
      transform: rotate(360deg);
    }
    
  }
  
}



`;