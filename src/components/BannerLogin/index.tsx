import React from 'react';
import { ImgBannerStyled, BannerContainer } from './styles';
import banner from "../../assets/img/banner.jpg"

export const BannerLogin = () => {
  return (
    <BannerContainer>
      <ImgBannerStyled src={banner} />
    </BannerContainer>
  )
};
