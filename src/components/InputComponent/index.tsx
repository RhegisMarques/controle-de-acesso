import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import {InputContainer, InputStyled} from "./styles"


type InputProps = {
  placeHolder : string;
  type: string;
  iconType: string
}


export const InputComponent = ({iconType, placeHolder, type}: InputProps) => {

  const icons = {
    login: <FaUserCircle/>,
    password: <RiLockPasswordFill/>
  }

  return(
    <InputContainer placeHolder={placeHolder}>
      <InputStyled type={type} />
      {icons.login}
    </ InputContainer>
  )
};

