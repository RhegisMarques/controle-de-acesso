import React from 'react'
import {ContainerStyled} from "./styles"
import {HiChevronRight} from "react-icons/hi"
import {MdDelete, MdModeEdit} from "react-icons/md"




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





export const CelularItem = ({data}:{data: Celular}) => {
  return (
    <ContainerStyled>
      <HiChevronRight className='seta'/>
      <p>{data.marca}</p>
      <p>{data.modelo}</p>
      <p>{data.imeis.imei1}</p>
      <p>{data.imeis.imei2}</p>
      <div>
        <MdModeEdit />
        <MdDelete className='remove' />
      </div>
    </ContainerStyled>
  )
}
