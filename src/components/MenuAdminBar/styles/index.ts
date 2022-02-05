import styled from "styled-components";



export const NavMenuContainer = styled.nav`

width: 40px;
height: 100vh;
background-color: var(--blue);
position: fixed;
box-shadow: 0 0 2px 1px var(--gray-400);
transition: width .2s;
overflow: hidden;

:hover{
  width: 200px;
}



`;  