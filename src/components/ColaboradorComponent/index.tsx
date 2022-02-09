import React from 'react';
import { ColaboradorContainerStyled, TitlesContentStyled, ColaboradorContentStyled, ColaboradorDataContent } from './styles';
import {HiChevronRight} from "react-icons/hi"
import {FaReact} from "react-icons/fa"
import {MdDelete, MdModeEdit} from "react-icons/md"






interface IColaboradorProps {
  id: string,
  identificacao: string,
  imgName?: string,
  imgPath?: string,
  username?: string, 
  password?: string,
  celular?: {
    marca: string,
    modelo: string,
    imgName?: string,
    id: string,
    imeis: {
      imei1: string,
      imei2?: string
    }
  },
  notebook?: {
    marca: string,
    modelo: string,
    imgName?: string,
    id: string,
    numeroPatrimonio?: string,
    numeroSerie: string,
  },
  nome: string, 
  cargo?: string;
  autorizado?: boolean,
  created_at: Date,
  updated_at: Date
}



export const ColaboradorComponent = ({data}: {data: IColaboradorProps[] | []}) => {
  const [isClicked, setIsClicked] = React.useState(false)
  
  
  function toggleClick(){
    setIsClicked( ()=> !isClicked )
  }
  
  
  
  return (
    <ColaboradorContainerStyled> 
      <TitlesContentStyled>
        <p><FaReact className='reactjs-icon' /></p>
        <p>Identificação</p>
        <p>Nome</p>
        <p>Cargo</p>
        <p>Ações</p>
      </TitlesContentStyled>
    
      { data.map( user => 
        <ColaboradorContentStyled key={`${user.id}`} clicked={isClicked}>
          <ColaboradorDataContent>
            <HiChevronRight onClick={toggleClick} className='seta'/>
            <p>{user.identificacao}</p>
            <p>{user.nome}</p>
            <p>{user.cargo}</p>
            <p><MdModeEdit className='edit' /><MdDelete className='remove' /></p>
          </ ColaboradorDataContent>
          <div className='colaborador-hidden-content'>
            <div className='colaborador-extra-content'>
              <h3>Dados</h3>
              <p>Username: {user.username}</p>
              <p>Autorizado: {user.autorizado}</p>
            </div>
            <div className='colaborador-celular-content'>
              <h3>Celular</h3>
              <p>Marca: {user?.celular?.marca}</p>
              <p>Modelo: {user?.celular?.modelo}</p>
              <p>Imei1: {user.celular?.imeis.imei1}</p>
              <p>Imei2: {user?.celular?.imeis?.imei2}</p>
            </div>
            <div className='colaborador-notebook-content'>
              <h3>Notebook</h3>
              <p>Marca: {user?.notebook?.marca}</p>
              <p>Modelo: {user.notebook?.modelo}</p>
              <p>Numero de serie: {user.notebook?.numeroSerie}</p>
              <p>Patrimônio: {user.notebook?.numeroSerie}</p>
            </div>
          </div>
        </ColaboradorContentStyled>
      ) }
      
    </ColaboradorContainerStyled>
      )
    }