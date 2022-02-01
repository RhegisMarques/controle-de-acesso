import styled from "styled-components"


export const LoginContainer = styled.div`

min-width: 30%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--white);
box-shadow: 0 0 10px var(--gray-200);



& div input{
  margin-bottom: 15px;
}


button, div{
  width: 70%;
}

`;



export const LoginPageContainer = styled.div`
display: flex;
`;