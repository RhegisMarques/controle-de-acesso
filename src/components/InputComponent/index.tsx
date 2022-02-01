import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import {InputLabelStyled, InputStyled} from "./styles"


type InputProps = {
  placeHolder: string;
  type: string;
  iconType: "login" | "password";
}



export const InputComponent = ({iconType, placeHolder, type}: InputProps) => {
  const [focus, setFocus] = React.useState(false)
  const [value, setValue] = React.useState("")
  
  const icons = {
    login: <FaUserCircle/>,
    password: <RiLockPasswordFill/>
  }
  
  function handleFocus(){
    setFocus(true)
  }
  
  
  function handleBlur(event: React.ChangeEvent<HTMLInputElement> ){
    setFocus(false)
  }
  
  function handleValue(event: React.ChangeEvent<HTMLInputElement>){
    setValue(event.target.value)
  }
  
  
  return(
    <InputLabelStyled value={value} focus={focus}>
      <span>{placeHolder}</span>
      <InputStyled 
        type={type} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={handleValue}
        />
      {icons[`${iconType}`]}
    </ InputLabelStyled>
    )
  };
  
