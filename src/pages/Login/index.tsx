import React from 'react';
import { ButtonLogin } from '../../components/ButtonLogin';
import { InputComponent } from '../../components/InputComponent';
import { LogoLogin } from '../../components/LogoLogin';
import { LoginContainer } from './styles';
import { BannerLogin } from '../../components/BannerLogin';
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
