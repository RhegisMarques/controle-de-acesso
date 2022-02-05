import styled from "styled-components";

interface IAdminContentProps {
  sizeW: number
}


export const AdminContainer =  styled.div`


`;



export const AdminContent = styled.div<IAdminContentProps>`
transition: all .2s;
padding-left: ${(props)=> props.sizeW}px;

`;