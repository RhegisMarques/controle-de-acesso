import React from 'react'
import { ContainerStyled, WrapperCelular } from "./styles"
import { ICelular, GlobalContext } from "../../../contexts/GlobalContext"
import { InputComponent } from '../../InputComponent'
import { ButtonDefault } from '../../ButtonDefault'





export const CelularContentModal = ({data}:{data:ICelular}) => {
  const { setModalIsOpen } = React.useContext(GlobalContext)


  function handleClick(){
    setModalIsOpen(false)
  }


function handleSubmit(e: React.FormEvent<HTMLFormElement>){
  e.preventDefault()
}



  return (
    <ContainerStyled onSubmit={handleSubmit}>
      <WrapperCelular >
        <legend>Celular</legend>
        <div>
          <InputComponent placeHolder='Marca' type='text' inpValueProps={data.marca}/>
        </div>
        <div>
          <InputComponent placeHolder='Modelo' type='text' inpValueProps={data.modelo}/>
        </div>
        <div>
          <InputComponent placeHolder='Imei1' type='text' inpValueProps={data.imeis.imei1}/>
        </div>
        <div>
          <InputComponent placeHolder='Imei2' type='text' inpValueProps={data.imeis.imei2}/>
        </div>
      </WrapperCelular>
      <div className='div-btns'>
        <ButtonDefault typeBtn='button' value='Cancelar' click={handleClick}/>
        <ButtonDefault typeBtn='submit' value='Salvar'/>
      </div>

    </ContainerStyled>
  )
}
