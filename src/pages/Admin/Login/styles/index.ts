import styled from "styled-components"



interface ILoginProps {
  error: boolean;
  inputUserNameValue: string;
  inputPasswordValue: string;
  userNameFocus: boolean;
  passwordFocus: boolean;
}



export const LoginContainer = styled.form<ILoginProps>`
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
  margin: 0 auto 1rem auto;
}

& label{
  margin-bottom: 1rem;
}


button, label{
  width: 70%;
}

.login-error{
  transition: all .2s;
  color: red;
  font-size: .75rem;
  opacity: ${({error})=> error ? 1 : 0 };
  margin-bottom: 5px;
  margin-left: -70px;
}


div:nth-child(4){
  margin-bottom: 15px;
}

.wrapperInput{
  position: relative;
  width: 100%;
  
  .placeHolderUserName{
    transition: all .2s;
    position: absolute;
    padding: 0 2px;
    font-size: ${(props)=> props.userNameFocus || props.inputUserNameValue ? .75 : 1}rem;
    top: ${(props)=> props.userNameFocus || props.inputUserNameValue ? -7 : 12}px;
    color: ${(props)=> props.userNameFocus ? "#0390d5" : "black"};
    left: 95px;
    pointer-events: none;
    background: ${(props)=> props.userNameFocus || props.inputUserNameValue ? "linear-gradient(to bottom, #ededed 50%,  white 50%)" : "white"}
  }
  
  
  .placeHolderPassword{
    transition: all .2s;
    font-size: ${(props)=> props.passwordFocus || props.inputPasswordValue ? .75 : 1}rem;
    position: absolute;
    top: ${(props)=> props.passwordFocus || props.inputPasswordValue ? -7 : 12}px;
    left: 95px;
    pointer-events: none;
    color: ${(props)=> props.passwordFocus ? "#0390d5" : "black"};
    padding: 0 2px;
    background: ${(props)=> props.passwordFocus || props.inputPasswordValue ? "linear-gradient(to bottom, #ededed 50%,  white 50%)" : "white"}
  }
  
  svg{
    position: absolute;
    top: 12px;
    left: 70px;
  }
  
  .inp-username, .inp-password{
    transition: all .2s;
    display: block;
    margin: 0 auto;
    width: 70%;
    padding: 10px 0 10px 35px;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
  }

  .inp-username{
    border: 1px solid ${(props)=> props.userNameFocus ? "#0390d5" : "#9a9c9e"};
  }
  
  .inp-password{
    border: 1px solid ${(props)=> props.passwordFocus ? "#0390d5" : "#9a9c9e"};
  }


}



`;





export const LoginPageContainer = styled.div`

display: flex;
position: relative;

`;