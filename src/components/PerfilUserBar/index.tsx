import React from 'react';
import { PerfilUserContainerStyled } from './styles';
import { PerfilUser } from '../PerfilUser';
import { GlobalContext } from '../../contexts/GlobalContext';
import  LogoCompleto from '../../assets/img/logo_completo.png';
export const PerfilUserBar = () => {
  const {mainAdminHomeWidth} = React.useContext(GlobalContext)





  return (
    <PerfilUserContainerStyled paddingSize={mainAdminHomeWidth}>
      <img src={LogoCompleto} className='logoCompleto' alt="logo completo" />
      <PerfilUser />
    </PerfilUserContainerStyled>
  )
};
