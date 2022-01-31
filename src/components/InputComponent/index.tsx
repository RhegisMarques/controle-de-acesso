import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import {InputContainer, InputStyled} from "./styles"


type InputProps = {
  placeHolder: string;
  type: string;
  iconType: "login" | "password",
}



export const InputComponent = ({iconType, placeHolder, type}: InputProps) => {
  const [focus, setFocus] = React.useState(false)
  
  const icons = {
    login: <FaUserCircle/>,
    password: <RiLockPasswordFill/>
  }
  
  function handleFocus(){
    setFocus(true)
  }
  
  
  function handleBlur(event: React.ChangeEvent<HTMLInputElement> ){
    !event.target.value ? setFocus(false) : setFocus(true)
  }
  
  
  
  
  return(
    <InputContainer focus={focus}>
      <span>{placeHolder}</span>
      <InputStyled 
        type={type} 
        onFocus={handleFocus}
        onBlur={handleBlur}
    />
      {icons[`${iconType}`]}
    </ InputContainer>
    )
  };
  
