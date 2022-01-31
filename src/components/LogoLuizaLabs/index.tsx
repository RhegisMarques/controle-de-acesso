import React from 'react';
import { ContainerLogo, LogoStyled } from './styles';
import logo from "../../assets/img/logo_luizalabs.png"

export const LogoLuizaLabs = () => {
  return (
    <ContainerLogo >
      <LogoStyled src={logo} alt='Logo LuizaLabs' title='Logo LuizaLabs'/>
    </ ContainerLogo>
    )
  };
