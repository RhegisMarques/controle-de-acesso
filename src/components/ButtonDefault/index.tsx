import React from 'react';
import { ButtonDefaultStyled } from './styles';

interface IButtonProps {
  value : string;
  click?: ()=> void;
  typeBtn: "submit" | "button";
  isDisabled?: boolean;
}


export const ButtonDefault = (props:IButtonProps) => {
  return <ButtonDefaultStyled disabled={props.isDisabled} onClick={props.click} type={props.typeBtn} >{props.value}</ButtonDefaultStyled>;
};
