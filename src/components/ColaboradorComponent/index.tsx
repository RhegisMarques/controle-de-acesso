import React from 'react';
import { ColaboradorContainerStyled, TitlesContentStyled} from './styles';
import {FaReact} from "react-icons/fa"
import {ColaboradorItem} from "./ColaboradorItem"



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
  autorizado: boolean,
  created_at: Date,
  updated_at: Date
}





export const ColaboradorComponent = ({data}: {data: IColaboradorProps[] | []}) => {
 
  
  return (
    <ColaboradorContainerStyled> 
      
      <TitlesContentStyled>
        <p><FaReact className='reactjs-icon' /></p>
        <p>Identificação</p>
        <p>Nome</p>
        <p>Cargo</p>
        <p>Ações</p>
      </TitlesContentStyled>
      
      { data.map( user => <ColaboradorItem user={user} key={`${user.id}`}/> ) } 
      
    </ColaboradorContainerStyled>
      )
    }