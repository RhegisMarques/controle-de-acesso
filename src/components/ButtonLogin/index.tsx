import React from 'react';
import { ButtonLoginStyled } from './styles';

interface IButtonProps {
  value : string
}


export const ButtonLogin = (props:IButtonProps) => {
  return <ButtonLoginStyled>{props.value}</ButtonLoginStyled>;
};
