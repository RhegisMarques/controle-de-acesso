import React from 'react';
import { ButtonLogin } from '../../components/ButtonLogin';
import { InputComponent } from '../../components/InputComponent';
import { LogoLogin } from '../../components/LogoLogin';
import { LoginContainer } from './styles';
import { BannerLogin } from '../../components/BannerLogin';
import { LoginPageContainer } from './styles';
import { Loading } from '../../components/Loading';

export const Login = () => {
  const [load, setLoad] = React.useState(false)



  return (
    <LoginPageContainer>
      <Loading load={load} color="#0390d5" type='bars' w={50} h={50}/>
      <LoginContainer>
        <LogoLogin/>
        <InputComponent iconType='login' type='text' placeHolder='UserName'/>
        <InputComponent iconType='password' type='password' placeHolder='Password'/>
        <ButtonLogin value='Logar'/>
      </LoginContainer>
      <BannerLogin />
    </LoginPageContainer>
  )
};
