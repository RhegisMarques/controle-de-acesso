import React, { RefObject } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import {InputLabelStyled, InputStyled} from "./styles"
import {ImSearch} from 'react-icons/im'


type InputProps = {
  placeHolder: string;
  type: string;
  iconType: "login" | "password" | "search";
  inpRef?: RefObject<HTMLInputElement>
}



export const InputComponent = ({iconType, placeHolder, type, inpRef}: InputProps) => {
  const [focus, setFocus] = React.useState(false)
  const [value, setValue] = React.useState("")
  
  const icons = {
    login: <FaUserCircle/>,
    password: <RiLockPasswordFill/>,
    search: <ImSearch />
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
      <InputStyled 
        ref={inpRef}
        type={type} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={handleValue}
        required
        />
      <span>{placeHolder}</span>
      {icons[`${iconType}`]}
    </ InputLabelStyled>
    )
  };
  
