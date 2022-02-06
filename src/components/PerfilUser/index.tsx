import React from 'react';
import { PerfilUserContainer, PerfilUserImg } from './styles';
import imgPerfil from "../../assets/img/perfilUser.png"
import { GlobalContext } from '../../contexts/GlobalContext';


export const PerfilUser = () => {
  const { mainAdminHomeWidth } = React.useContext(GlobalContext)



  return (
    <PerfilUserContainer imgSize={mainAdminHomeWidth} className='PerfilUserContainer' >
      <PerfilUserImg src={imgPerfil} />
    </PerfilUserContainer>
  )
};
