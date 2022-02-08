import React from 'react';
import { PerfilUserContainer, PerfilUserImg } from './styles';
import imgPerfil from "../../assets/img/perfilUser.png"
import { GlobalContext } from '../../contexts/GlobalContext';

export const PerfilUser = () => {
  const { userData } = React.useContext(GlobalContext)
  const photo = "http://localhost:3000/public/img/uploads/" + userData.imgName
  
  return (
    <PerfilUserContainer className='PerfilUserContainerImg' >
      <div className='gapPerfil'>
        <PerfilUserImg src={userData.imgPath ? photo : imgPerfil} alt='Foto Perfil'/>
        <span>{userData.nome}</span>
      </div>
    </PerfilUserContainer>
    )
  };
