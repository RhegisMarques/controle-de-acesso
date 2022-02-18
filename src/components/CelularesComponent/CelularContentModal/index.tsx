import React from 'react'
import { ContainerStyled, WrapperCelular } from "./styles"
import { ICelular, GlobalContext } from "../../../contexts/GlobalContext"
import { ButtonDefault } from '../../ButtonDefault'
import { useMutation } from "react-query"
import { MyQueryClient } from '../../../contexts/QueryCliente'
import { AxiosApi } from '../../../services/AxiosApi'


export const CelularContentModal = ({data}:{data:ICelular}) => {
  const { setModalIsOpen, setLoad } = React.useContext(GlobalContext)
  const [marca, setMarca] = React.useState(data.marca)
  const [modelo, setModelo] = React.useState(data.modelo)
  const [imei1, setImei1] = React.useState(data.imeis.imei1)
  const [imei2, setImei2] = React.useState(data.imeis.imei2)
 
  
  const {} = useMutation(update)
  const formData = new FormData()
  formData.append("id", data.id)


  React.useEffect( ()=> {
    formData.append("marca", marca) 
    formData.append("modelo", modelo) 
    formData.append("imei1", imei1)
    imei2 && formData.append("imei2", imei2)  
  }, [marca, modelo, imei1, imei2] )


  async function update(){
    setLoad(true)
    try {
      await AxiosApi.put("/celulares", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      MyQueryClient.invalidateQueries("celulares")
    } catch (error) {
      console.log(error)
    }finally{
      setLoad(false)
      setModalIsOpen(false)
    }
  }
  


  function handleChangeInputFile(e: React.ChangeEvent<HTMLInputElement>){
    if(e.currentTarget.files){
      formData.append("file", e.currentTarget.files[0])
    }
  }


  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    update()
  }
  
  
  
  return (
    <ContainerStyled onSubmit={handleSubmit}>
      <WrapperCelular >
        <legend>Celular</legend>
        <div className='wrapper-atributos-celular'>
          <div>
            <input type="text" required placeholder='Marca' onChange={ function(e){setMarca(e.currentTarget.value) } } value={marca} />
          </div>
          <div>
            <input type="text" required placeholder='Modelo' onChange={ function(e){setModelo(e.currentTarget.value) } } value={modelo}/>
          </div>
          <div>
            <input type="text" required placeholder='Imei1'onChange={ function(e){setImei1(e.currentTarget.value) } } value={imei1}/>
          </div>
          <div>
            <input type="text" placeholder='Imei2'onChange={ function(e){setImei2(e.currentTarget.value) } } value={imei2}/>
          </div>
        </div>
        <div className='div-input-file'>
          <input accept="image/*" type="file" onChange={ handleChangeInputFile } />
        </div>
      </WrapperCelular>
      <div className='div-btns'>
        <ButtonDefault typeBtn='button' value='Cancelar' click={()=> setModalIsOpen(false)}/>
        <ButtonDefault typeBtn='submit' value='Salvar' />
      </div>
    
    </ContainerStyled>
    )
  }
