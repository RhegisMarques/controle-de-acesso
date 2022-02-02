import styled from "styled-components"


export const LoginContainer = styled.div`
position: relative;
min-width: 400px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--white);
box-shadow: 0 0 10px var(--gray-200);


.containerLogoLogin{
  margin-bottom: 1rem;
}

& label{
  margin-bottom: 1.5rem;
}


button, label{
  width: 70%;
}

`;



export const LoginPageContainer = styled.div`

display: flex;
position: relative;

`;