import React from 'react';
import { ImgLuizaLabsStyled, BannerContainer } from './styles';
import luizalabs from "../../assets/img/luizalabs.jpg"

export const BannerLuizaLabs = () => {
  return (
    <BannerContainer>
      <ImgLuizaLabsStyled src={luizalabs} />
    </BannerContainer>
  )
};
