import React from 'react';
import { InputComponent } from '../InputComponent';
import { LoginContainer } from './styles';

export const Login = () => {
  return (
    <LoginContainer>
      <InputComponent iconType='login' type='text' placeHolder='UserName'/>
      <InputComponent iconType='password' type='password' placeHolder='Password'/>
    </LoginContainer>
  )
};
