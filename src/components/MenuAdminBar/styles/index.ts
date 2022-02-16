import styled from "styled-components";

interface ILogoMlProps {
  sizeBar: number
}

export const NavMenuContainer = styled.nav<ILogoMlProps>`

width: 40px;
height: 100vh;
background-color: var(--blue);
position: fixed;
box-shadow: 0 0 2px 1px var(--gray-400);
transition: width .2s;
overflow: hidden;

:hover{
  width: 220px;
}

.logoMl{
  width: 200px;
  display: block;
  opacity: ${ (props)=> props.sizeBar === 40 ? 0 : 1  };
  transition: all .2s;
}

.menuAdminLinks{
  margin-top: 30px;
}



`;  