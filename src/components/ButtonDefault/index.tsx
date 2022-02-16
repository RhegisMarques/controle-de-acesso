import React from 'react';
import { ButtonDefaultStyled } from './styles';

interface IButtonProps {
  value : string;
  click?: ()=> void;
  typeBtn: "submit" | "button";
}


export const ButtonDefault = (props:IButtonProps) => {
  return <ButtonDefaultStyled onClick={props.click} type={props.typeBtn}>{props.value}</ButtonDefaultStyled>;
};
