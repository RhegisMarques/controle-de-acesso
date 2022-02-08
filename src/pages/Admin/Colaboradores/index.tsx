import React from 'react';
import { ButtonLogin } from '../../../components/ButtonLogin';
import { ColaboradoresContainerStyled, WrapColaboradoresTitleStyled } from './styles';

export const Colaboradores = () => {
  return( 
    <ColaboradoresContainerStyled>
      <WrapColaboradoresTitleStyled >
        <h2>Colaboradores</h2>
        <ButtonLogin  value='Novo Colaborador' />
      </WrapColaboradoresTitleStyled>
    
    </ColaboradoresContainerStyled>
    )
  };


  