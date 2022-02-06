import styled from "styled-components";


interface PerfilUserProps {
  imgSize: number
}

export const PerfilUserContainer = styled.div<PerfilUserProps>`
transition: all .2s;
width: ${(props)=> props.imgSize === 40 ?  props.imgSize - 10 : props.imgSize - 100 }px;
margin: 0 auto;

`;


export const PerfilUserImg = styled.img`

width: 100%;
display: block;




`;