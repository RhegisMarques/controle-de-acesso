import styled from "styled-components";
import imgBanner from "../../../assets/img/banner.jpg"

export const BannerContainer = styled.div`

width: 100%;
background-image: url(${imgBanner});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
height: 100vh;







@media (max-width: 1300px){
  
  
  background-position: center center;
  background-size: cover;




}

`;

