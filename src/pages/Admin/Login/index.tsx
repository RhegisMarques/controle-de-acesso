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
import { useMutation } from "react-query"





export const Login = () => {
  
  const userValue = React.useRef<HTMLInputElement>(null) 
  const passwordValue = React.useRef<HTMLInputElement>(null) 
  const {setLoad, setLogin, login, setUserData} = React.useContext(GlobalContext)
  const navegate = useNavigate()
  const [password, setPassword] = React.useState<string | undefined>("")
  const [username, setUserName] = React.useState<string | undefined>("")
  
  React.useEffect( ()=> {
    if(login) navegate("/admin", {replace: true})
  }, [login, navegate] )
  
  
  const { } = useMutation(singIn)
  
  
  async function singIn(){
    setLoad(true)
    try {
      const {data} = await AxiosApi.post("/login", {username, password}) 
      window.sessionStorage.setItem("token", data.token)
      window.sessionStorage.setItem("nome", data.user.nome)
      setUserData(data)
      setLogin(true)
    } catch (error) {
      console.log(error)
      setLogin(false)
    }finally{
      setLoad(false)
    }
  }
  
  
  async function useLogin(e: FormEvent){
    e.preventDefault()
    setUserName(userValue.current?.value)
    setPassword(passwordValue.current?.value)
    singIn()
  }
  
  
  
  return (
    <LoginPageContainer>
      <LoginContainer onSubmit={useLogin}>
        <LogoLogin/>
        <InputComponent inpRef={userValue} iconType='login' type='text'  placeHolder='UserName' />
        <InputComponent inpRef={passwordValue} iconType='password' type='password' placeHolder='Password' />
        <ButtonDefault value='Logar' typeBtn='submit'/>
      </LoginContainer>
      <BannerLogin />
    </LoginPageContainer>
    )
  };
