import React from 'react';
import { ButtonLogin } from '../ButtonLogin';
import { InputComponent } from '../InputComponent';
import { LogoLogin } from '../LogoLogin';
import { LoginContainer } from './styles';
import { BannerLogin } from '../BannerLogin';
import { LoginPageContainer } from './styles';

export const Login = () => {
  return (
    <LoginPageContainer>
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
