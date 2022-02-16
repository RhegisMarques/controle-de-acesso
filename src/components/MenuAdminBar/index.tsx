import React from 'react';
import {NavMenuContainer} from "./styles"
import { GlobalContext } from '../../contexts/GlobalContext';
import { MenuAdminLinks } from '../MenuAdminLinks';
import LogoMl from "../../assets/img/logoMl.png"


export const MenuAdmin = () => {
  const {setMainAdminHomeWidth, mainAdminHomeWidth} = React.useContext(GlobalContext)
  
  function handleMouseOver(){
    setMainAdminHomeWidth(220)
  }
  
  
  function handleMouseDown(){
    setMainAdminHomeWidth(40)
  }
  
  
  return (
    <>
      <NavMenuContainer 
        className='containerMenuAdmin' 
        sizeBar={mainAdminHomeWidth}
        onMouseOut={handleMouseDown} 
        onMouseOver={handleMouseOver}>
        <img src={LogoMl} alt="" className='logoMl'/>
        <MenuAdminLinks />
        
      </NavMenuContainer>
    </>
    )
  };
