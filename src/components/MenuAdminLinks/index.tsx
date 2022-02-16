import React, { useContext } from 'react';
import { LinksContainer, LinksContent } from './styles';
import { NavLink } from 'react-router-dom';
import {FaUsers, FaMobileAlt} from "react-icons/fa"
import {GiHouseKeys, GiLockers, GiArchiveRegister} from "react-icons/gi"
import {MdComputer, MdOutlineAppRegistration} from "react-icons/md"
import {IoExit} from "react-icons/io5"
import { GlobalContext } from '../../contexts/GlobalContext';


export const MenuAdminLinks = () => {
  const {setLogin, setMainAdminHomeWidth} = useContext(GlobalContext)
  
  function handleLogout(){
    window.sessionStorage.removeItem("token")
    setLogin(false)
    setMainAdminHomeWidth(40)
  }
  
  
  
  
  
  return( 
    
    <LinksContainer className='menuAdminLinks'>
      <LinksContent>
        <NavLink to="/admin/colaboradores" >
          <FaUsers />
          <span>Colaboradores</span>
        </NavLink>
      </LinksContent>
      <LinksContent >
        <NavLink to="/admin/guardavolumes">
          <GiLockers />
          <span>Guarda Volumes</span>
        </NavLink>
      </LinksContent>
      <LinksContent >
        <NavLink to="/admin/notebooks" >
          <MdComputer />
          <span>Notebooks</span>
        </ NavLink>
      </LinksContent>
      <LinksContent >
        <NavLink to="/admin/celulares" >
          <FaMobileAlt />
          <span>Celulares</span>
        </ NavLink>
      </LinksContent>
      <LinksContent >
        <NavLink to="/admin/chaves">
          <GiHouseKeys />
          <span>Chaves</span>
        </NavLink>
      </LinksContent>
      <LinksContent >
        <NavLink to="/admin/logchaves">
          <GiArchiveRegister />
          <span>Log Armarios</span>
        </NavLink>
      </LinksContent>
      <LinksContent >
        <NavLink to="/admin/logchaves">
          <MdOutlineAppRegistration />
          <span>Log celular/notebook</span>
        </NavLink>
      </LinksContent>
      <LinksContent >
        <NavLink to="/admin/login" onClick={handleLogout}>
          <IoExit />
          <span>Sair</span>
        </ NavLink>
      </LinksContent> 
     
    </LinksContainer>
    
    )
  };
