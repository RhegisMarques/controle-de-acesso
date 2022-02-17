import React, { RefObject } from 'react';
import { FaUserCircle, FaAngleRight } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import {InputLabelStyled, InputStyled} from "./styles"
import {ImSearch} from 'react-icons/im'


type InputProps = {
  placeHolder: string;
  req?: boolean
  type: string;
  inpValueProps?: string;
  readonly?: boolean;
  iconType?: "login" | "password" | "search";
  inpRef?: RefObject<HTMLInputElement>;
}



export const InputComponent = ({iconType, placeHolder, req, type, inpRef, inpValueProps, readonly} : InputProps) => {
  const [focus, setFocus] = React.useState(false)
  const [inputValue, setInputValue] = React.useState<string | undefined>(inpValueProps ? inpValueProps : "")


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

function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
  setInputValue(e.currentTarget.value)
}


  
  return(
    <InputLabelStyled value={inputValue} focus={focus}>
      <InputStyled 
        ref={inpRef}
        type={type} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleInputChange}
        required={req}
        readOnly={readonly}
        />
      <span>{placeHolder}</span>
      {iconType ? icons[`${iconType}`] : <FaAngleRight />}
    </ InputLabelStyled>
    )
  };
  
