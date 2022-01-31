import React from 'react';
import { ButtonLogin } from '../ButtonLogin';
import { InputComponent } from '../InputComponent';
import { LogoLuizaLabs } from '../LogoLuizaLabs';
import { LoginContainer } from './styles';
import { BannerLuizaLabs } from '../BannerLuizaLabs';
import { LoginPageContainer } from './styles';

export const Login = () => {
  return (
    <LoginPageContainer>
      <LoginContainer>
        <LogoLuizaLabs/>
        <InputComponent iconType='login' type='text' placeHolder='UserName'/>
        <InputComponent iconType='password' type='password' placeHolder='Password'/>
        <ButtonLogin value='Logar'/>
      </LoginContainer>
      <BannerLuizaLabs />
    </LoginPageContainer>
  )
};
