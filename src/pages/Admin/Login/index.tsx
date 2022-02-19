import React, { FormEvent } from 'react';
import { ButtonDefault } from '../../../components/ButtonDefault';
import { LogoLogin } from '../../../components/LogoLogin';
import { LoginContainer } from './styles';
import { BannerLogin } from '../../../components/BannerLogin';
import { LoginPageContainer } from './styles';
import { AxiosApi } from '../../../services/AxiosApi';
import {GlobalContext} from "../../../contexts/GlobalContext"
import { useNavigate } from 'react-router';
import { useMutation } from "react-query"
import {FaUserCircle} from "react-icons/fa"
import {RiLockPasswordFill} from "react-icons/ri"





export const Login = () => {
  
  const {setLoad, setLogin, login, setUserData} = React.useContext(GlobalContext)
  const navegate = useNavigate()
  const [hasError, setHasError] = React.useState<boolean>(false)
  const [password, setPassword] = React.useState<string>("")
  const [username, setUserName] = React.useState<string>("")
  const [userNameFocus, setUserNameFocus] = React.useState(false)
  const [passwordFocus, setPasswordFocus] = React.useState(false)
  
  React.useEffect( ()=> {
    if(login) navegate("/admin", {replace: true})
  }, [login, navegate] )
  
  
  const {} = useMutation(singIn)
  
  
  async function singIn(){
    setLoad(true)
    try {
      const {data} = await AxiosApi.post("/login", {username, password}) 
      window.sessionStorage.setItem("token", data.token)
      window.sessionStorage.setItem("nome", data.user.nome)
      setHasError(false)
      setUserData(data)
      setLogin(true)
    } catch (error) {
      console.log(error)
      setLogin(false)
      setHasError(true)
    }finally{
      setLoad(false)
    }
  }
  
  
  
  
  async function handleSubmit(e: FormEvent){
    e.preventDefault()
    singIn()
  }
  
  
  
  return (
    <LoginPageContainer>
      <LoginContainer 
        onSubmit={handleSubmit} 
        error={hasError} 
        inputUserNameValue={username} 
        inputPasswordValue={password}
        userNameFocus={userNameFocus}
        passwordFocus={passwordFocus}
        >
        <LogoLogin/>
        <div className='wrapperInput'>
          <label >
            <span className='placeHolderUserName'>UserName</span>
            <input type="text" 
              className='inp-username'
              onFocus={ ()=> setUserNameFocus(true) } 
              onBlur={()=> setUserNameFocus(false)} value={username} 
              onChange={(e)=> setUserName(e.target.value)} />
          </label>
          <FaUserCircle/>
        </div>
        <p className='login-error'>UserName ou Password não conferem</p>
        <div className='wrapperInput'>
          <label >
            <span className='placeHolderPassword'>Password</span>
            <input type="password" 
              className='inp-password'
              value={password} 
              onChange={(e)=> setPassword(e.target.value)}
              onFocus={ ()=> setPasswordFocus(true) } 
              onBlur={()=> setPasswordFocus(false)} />
            <RiLockPasswordFill />
          </label>
        </div>
        <ButtonDefault value='Logar' typeBtn='submit'/>
      </LoginContainer>
      <BannerLogin />
    </LoginPageContainer>
    )
  };
