import React from 'react';
import { ButtonDefaultStyled } from './styles';

interface IButtonProps {
  value : string;
  click?: ()=> void
}


export const ButtonDefault = (props:IButtonProps) => {
  return <ButtonDefaultStyled onClick={props.click} type='submit'>{props.value}</ButtonDefaultStyled>;
};
