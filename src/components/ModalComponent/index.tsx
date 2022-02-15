import React from 'react'
import ReactModal from "react-modal"
import { GlobalContext } from "../../contexts/GlobalContext"
import styles from "./Modal.module.css"

export const ModalComponent = () => {
const { modalIsOpen, setModalIsOpen } = React.useContext(GlobalContext)



  return (
    <div className={styles.Overlay}>
      <ReactModal className={styles.Modal} isOpen={modalIsOpen}>
        index
      </ReactModal>
    </div>
    )
  }
