import React from 'react';
import { ContainerLogo, LogoStyled } from './styles';
import logo from "../../assets/img/logo.png"

export const LogoLogin = () => {
  return (
    <ContainerLogo >
      <LogoStyled src={logo} alt='Logo' title='Logo'/>
    </ ContainerLogo>
    )
  };
