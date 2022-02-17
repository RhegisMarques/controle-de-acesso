import React from 'react'
import {ContainerStyled, TitlesContentStyled} from "./styles"
import {FaReact} from "react-icons/fa"
import {CelularItem} from "./CelularItem"


type Celular= {
  marca: string,
  modelo: string,
  imgName?: string,
  id: string,
  imeis: {
    imei1: string,
    imei2?: string
  }
}



export const CelularesComponent = ({data}:{data: Celular[] | []}) => {
  return (
    <ContainerStyled>
      <TitlesContentStyled>
        <p><FaReact className='reactjs-icon' /></p>
        <p>Marca</p>
        <p>Modelo</p>
        <p>Imei1</p>
        <p>Imei2</p>
        <p>Ações</p>
      </TitlesContentStyled>

      {data.map( (celular) => <CelularItem data={celular} key={celular.id} /> )} 
      
    </ContainerStyled>
  )
}
