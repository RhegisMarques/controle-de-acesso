import styled from "styled-components";

export const LinksContainer = styled.ul`

padding-left: 8px;



`;


export const LinksContent= styled.li`
:last-of-type{
  padding-left: 3px;
}

transition: all .2s;
font-weight: 600;
width: 200px;
margin-bottom: 10px;

a{
  display: flex;
  align-items: center;
  
  
  span{
    margin-left: 8px;
    padding-top: 3px;
  }
  
}

a.active, a.active > svg{
  color: white;
}

svg{
  transition: all .2s;
  font-size: 1.5rem;
  color: var(--black);
}



:hover, :hover svg{
  color: var(--white);
  
}


`;