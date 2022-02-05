import React from 'react';
import {NavMenuContainer} from "./styles"
import { GlobalContext } from '../../contexts/GlobalContext';
import { MenuAdminLinks } from '../MenuAdminLinks';


export const MenuAdmin = () => {
  const {setMainAdminHomeWidth} = React.useContext(GlobalContext)
  
  function handleMouseOver(){
    setMainAdminHomeWidth(200)
  }
  
  
  function handleMouseDown(){
    setMainAdminHomeWidth(40)
  }
  
  
  return (
    <>
      <NavMenuContainer 
        className='containerMenuAdmin' 
        onMouseOut={handleMouseDown} 
        onMouseOver={handleMouseOver}>


        <MenuAdminLinks />

      </NavMenuContainer>
    </>
    )
  };
