import React from 'react';
import { ButtonDefault } from '../ButtonDefault';
import { InputComponent } from '../InputComponent';
import { SearchFormStyled } from './styles';


export const SearchComponent = () => {
  const inpSearch = React.useRef<HTMLInputElement>(null)
  
  

  
  return(
    <SearchFormStyled>
      <InputComponent placeHolder='Identificação/Nome' inpRef={inpSearch} type='text' iconType='search' />
      <ButtonDefault value='Procurar' typeBtn='submit'/>
    </SearchFormStyled>
    ) 
  };
