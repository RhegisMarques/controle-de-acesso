import React from 'react'
import {HiChevronRight} from "react-icons/hi"
import {MdDelete, MdModeEdit} from "react-icons/md"
import {ColaboradorContentStyled, ColaboradorDataContent} from "./styles"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { MyModal } from '../../MyModal'

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





export const ColaboradorItem = ({user}: {user: IColaboradorProps}) => {
  const [isClicked, setIsClicked] = React.useState(false)
  const {setModalIsOpen, setModalUserData} = React.useContext(GlobalContext)


function toggleClick(){
  setIsClicked(!isClicked)
}

function handleModalIsOpen(data: IColaboradorProps){
  setModalIsOpen(true)
  setModalUserData(data)
}

  return (
    <>
      <MyModal />
      <ColaboradorContentStyled clicked={isClicked} >
        <ColaboradorDataContent>
          <HiChevronRight onClick={toggleClick} className='seta' id={user.id}/>
          <p>{user.identificacao}</p>
          <p>{user.nome}</p>
          <p>{user.cargo}</p>
          <p><MdModeEdit className='edit' onClick={()=> handleModalIsOpen(user)} /><MdDelete className='remove' /></p>
        </ ColaboradorDataContent>
        <div className='colaborador-hidden-content'>
          <div className='colaborador-extra-content'>
            <h3>Dados</h3>
            <p>Username: {user.username}</p>
            <p>Acesso com celular/notebook: {user.autorizado ? "Sim" : "Não"}</p>
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
    </>
    
  )
}
