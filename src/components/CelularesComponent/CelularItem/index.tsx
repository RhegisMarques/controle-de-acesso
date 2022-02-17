import React from 'react'
import {ContainerStyled} from "./styles"
import {HiChevronRight} from "react-icons/hi"
import {MdDelete, MdModeEdit} from "react-icons/md"
import { ICelular, GlobalContext } from "../../../contexts/GlobalContext"






export const CelularItem = ({data}:{data: ICelular}) => {
const { setModalCelularData, setModalIsOpen } = React.useContext(GlobalContext)
    


function handleClick(){
  setModalCelularData(data)
  setModalIsOpen(true)
}



  return (
    <ContainerStyled>
      <HiChevronRight className='seta'/>
      <p>{data.marca}</p>
      <p>{data.modelo}</p>
      <p>{data.imeis.imei1}</p>
      <p>{data.imeis.imei2}</p>
      <div>
        <MdModeEdit onClick={handleClick}/>
        <MdDelete className='remove' />
      </div>
    </ContainerStyled>
  )
}
