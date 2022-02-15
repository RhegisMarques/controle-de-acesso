import React, { FormEvent } from 'react';
import { ButtonDefault } from '../../../components/ButtonDefault';
import { InputComponent } from '../../../components/InputComponent';
import { LogoLogin } from '../../../components/LogoLogin';
import { LoginContainer } from './styles';
import { BannerLogin } from '../../../components/BannerLogin';
import { LoginPageContainer } from './styles';
import { AxiosApi } from '../../../services/AxiosApi';
import {GlobalContext} from "../../../contexts/GlobalContext"
import { useNavigate } from 'react-router';

export const Login = () => {
  
  const userValue = React.useRef<HTMLInputElement>(null) 
  const passwordValue = React.useRef<HTMLInputElement>(null) 
  const {setLoad, setLogin, login, setUserData} = React.useContext(GlobalContext)
  const navegate = useNavigate()
  
  React.useEffect( ()=> {
    if(login) navegate("/admin", {replace: true})
  }, [login, navegate] )
  
  
  async function handleSubmit (e: FormEvent){
    
    
    e.preventDefault()
    const username = userValue.current?.value
    const password = passwordValue.current?.value
    
    try {
      setLoad(true)
      
      const {data} = await AxiosApi.post("/login", {username, password})
      window.sessionStorage.setItem("token", data.token)
      window.sessionStorage.setItem("nome", data.user.nome)
      setLogin(true)
      
      setUserData(data.user)
            
      navegate("/admin", {replace: true})
    } catch (error) {
      console.log(error)
      setLogin(false)
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
        <ButtonDefault value='Logar'/>
      </LoginContainer>
      <BannerLogin />
    </LoginPageContainer>
    )
  };
