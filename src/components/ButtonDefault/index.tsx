import React from 'react';
import { ButtonDefaultStyled } from './styles';

interface IButtonProps {
  value : string
}


export const ButtonLogin = (props:IButtonProps) => {
  return <ButtonDefaultStyled type='submit'>{props.value}</ButtonDefaultStyled>;
};
