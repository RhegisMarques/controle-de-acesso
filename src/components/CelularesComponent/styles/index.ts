import styled from "styled-components";




export const ContainerStyled = styled.div`

background-color: white;
margin-top: 30px;
width: 100%;
border-radius: 5px;
border: 1px solid var(--gray-200);
padding: 30px;



`;





export const TitlesContentStyled = styled.div`

border-bottom: 1px solid var(--gray-200);

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

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