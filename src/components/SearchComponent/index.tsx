import React from 'react';
import { ButtonLogin } from '../ButtonDefault';
import { InputComponent } from '../InputComponent';
import { SearchFormStyled } from './styles';


export const SearchComponent = () => {
  const inpSearch = React.useRef<HTMLInputElement>(null)
  
  

  
  return(
    <SearchFormStyled>
      <InputComponent placeHolder='Identificação/Nome' inpRef={inpSearch} type='text' iconType='search' />
      <ButtonLogin value='Procurar' />
    </SearchFormStyled>
    ) 
  };
