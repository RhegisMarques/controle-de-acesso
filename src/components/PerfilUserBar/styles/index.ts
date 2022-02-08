import styled from "styled-components";



interface IPerfilUserContainerProps {
  paddingSize: number
}

export const PerfilUserContainerStyled = styled.div<IPerfilUserContainerProps>`

transition: all .2s;
background-color: white;
padding: 5px 0 5px ${({paddingSize})=> paddingSize}px;
box-shadow: 0 0 3px var(--black);
height: 60px;

display: flex;
justify-content: space-between;
align-items: center;

.containerLogoLogin{
  width: 45px;
  margin-left: 10px;
}

.logoCompleto{
  margin-left: 10px;
  height: 100%;
}

`;