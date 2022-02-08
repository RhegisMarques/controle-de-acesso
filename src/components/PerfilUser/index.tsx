import React from 'react';
import { PerfilUserContainer, PerfilUserImg } from './styles';
import imgPerfil from "../../assets/img/perfilUser.png"
import { GlobalContext } from '../../contexts/GlobalContext';

export const PerfilUser = () => {
  const { userData } = React.useContext(GlobalContext)
  
 
  return (
    <PerfilUserContainer className='PerfilUserContainerImg' >
      <div className='gapPerfil'>
        <PerfilUserImg src={imgPerfil}/>
        <span>{userData.nome?.split(" ")[0]}</span>
      </div>
    </PerfilUserContainer>
    )
  };
