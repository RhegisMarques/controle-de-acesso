import React, { FormEvent } from 'react';
import { ButtonLogin } from '../../../components/ButtonLogin';
import { InputComponent } from '../../../components/InputComponent';
import { LogoLogin } from '../../../components/LogoLogin';
import { LoginContainer } from './styles';
import { BannerLogin } from '../../../components/BannerLogin';
import { LoginPageContainer } from './styles';
import { AxiosApi } from '../../../services/AxiosApi';
import {GlobalContext} from "../../../contexts/GlobalContext"

export const Login = () => {
  const userValue = React.useRef<HTMLInputElement>(null) 
  const passwordValue = React.useRef<HTMLInputElement>(null) 
  const {setLoad, login} = React.useContext(GlobalContext)

  async function handleSubmit(e: FormEvent){
    e.preventDefault()
    const username = userValue.current?.value
    const password = passwordValue.current?.value
    
    try {
      setLoad(true)
      
      const {data} = await AxiosApi.post("/login", {username, password})
      window.sessionStorage.setItem("token", data.token)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoad(false)
    }
  }
  
  
  return (
    <LoginPageContainer>
      <LoginContainer onSubmit={handleSubmit}>
        <LogoLogin/>
        <InputComponent inpRef={userValue} iconType='login' type='text' placeHolder='UserName'/>
        <InputComponent inpRef={passwordValue} iconType='password' type='password' placeHolder='Password'/>
        <ButtonLogin value='Logar'/>
      </LoginContainer>
      <BannerLogin />
    </LoginPageContainer>
    )
  };
