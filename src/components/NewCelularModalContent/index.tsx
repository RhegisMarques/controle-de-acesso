import React from 'react'
import { ButtonDefault } from '../ButtonDefault'
import {NewCelularContainer} from "./styles"
import {GlobalContext} from "../../contexts/GlobalContext"
import { useMutation } from "react-query"
import { AxiosApi } from '../../services/AxiosApi'





export const NewCelularModalContent = () => {
  const [marca, setMarca] = React.useState("")
  const [modelo, setModelo] = React.useState("")
  const [imei1, setImei1] = React.useState("")
  const [imei2, setImei2] = React.useState<string | undefined>("")
  const {setModalIsOpen} = React.useContext(GlobalContext)
  
  
  const {} = useMutation(createCelular)
  
  
  async function createCelular(e: React.FormEvent<HTMLInputElement>){
  e.preventDefault()
  await AxiosApi.post("/celulares", {marca, modelo, imei1, imei2})
}




  return (
    <NewCelularContainer>
      <h2>Cadastro de novo celular</h2>
      <fieldset>
        <label>
          <span>Marca</span>
          <input type="text" required onChange={(e)=> setMarca(e.target.value)} value={marca} />
        </label>
        <label>
          <span>Modelo</span>
          <input type="text" required onChange={(e) => setModelo(e.target.value)} value={modelo} />
        </label>
        <label>
          <span>Imei1</span>
          <input type="text" required onChange={(e) => setImei1(e.target.value)} value={imei1}/>
        </label>
        <label>
          <span>Imei2</span>
          <input type="text"  onChange={(e) => setImei2(e.target.value)} value={imei2}/>
        </label>
      </fieldset>
      <div className='div-btns'>
        <ButtonDefault typeBtn='submit' value='Salvar' click={createCelular}/>
        <ButtonDefault typeBtn='button' value='Cancelar' click={()=> setModalIsOpen(false)}/>
      </div>
    </NewCelularContainer>
    )
  }
