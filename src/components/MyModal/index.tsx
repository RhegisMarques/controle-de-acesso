import React from 'react'
import ReactModal from 'react-modal'
import { GlobalContext } from '../../contexts/GlobalContext'
import modalStyles from "./styles/styles.module.css"
import { ModalContentComponent } from "../ModalContentComponent"


export const MyModal = () => {
  const { modalIsOpen, setModalIsOpen } = React.useContext(GlobalContext)





  return (
    <ReactModal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} className={modalStyles.Modal}>
      <ModalContentComponent />
    </ReactModal>
  )
}
