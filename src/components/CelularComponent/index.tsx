import React from 'react'
import { ICelular } from "../../contexts/GlobalContext"
import {CelularContainerStyled, WrapperCelularData} from "./styles"
import { HiChevronRight } from "react-icons/hi"
import { MdModeEdit, MdDelete } from "react-icons/md"
import celularFake from "../../assets/img/celular-fake.png"
import { ButtonDefault } from '../ButtonDefault'
import { MyQueryClient } from "../../contexts/QueryCliente"
import { useMutation } from "react-query"
import { AxiosApi } from '../../services/AxiosApi'



export const CelularComponet = ({data}:{data:ICelular}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [editable, setEditable] = React.useState(false)
  const [marca, setMarca] = React.useState(data.marca)
  const [modelo, setModelo] = React.useState(data.modelo)
  const [imei1, setImei1] = React.useState(data.imeis.imei1)
  const [imei2, setImei2] = React.useState(data.imeis.imei2)
  const [file, setFile] = React.useState<FileList | null>(null)
  
  const fotoCelular = "http://localhost:3000/public/img/uploads/" + data.imgName
  let dataForm = new FormData()
  
  
  function handleSetaOPen(){
    setIsOpen(()=> !isOpen)
    
    if(isOpen === true){
      setEditable(false)
    }
    
  }
  
  
  const {} = useMutation(update)
  const {} = useMutation(handleDelete)
  
  
  async function update(){
    const result = await AxiosApi.put("/celulares", dataForm)
    MyQueryClient.invalidateQueries("celulares")
  }
  
  
  
  
  function handleUpdate(){
    dataForm.append("id", data.id)
    dataForm.append("marca", marca)
    dataForm.append("modelo", modelo)
    dataForm.append("imei1", imei1)
    if(imei2) dataForm.append("imei2", imei2)
    if(file) dataForm.append("file", file[0])
    
    update()
    setEditable(false)
  }
  
  
  
  async function handleDelete(e: React.MouseEvent<HTMLOrSVGElement>){
    const confirm = window.confirm("Deseja realmente excluir esse item ?")
    if(!confirm) {
      e.stopPropagation()
      return
    }
    
    await AxiosApi.delete("/celulares/" + data.id)
    MyQueryClient.invalidateQueries("celulares")
    
  }
  
  
  
  
  function handleEdite(){
    setEditable(true)
    setIsOpen(true)
  }
  
  
  function handleCancel(){
    setEditable(false)
    setMarca(data.marca)
    setModelo(data.modelo)
    setImei1(data.imeis.imei1)
    setImei2(data.imeis.imei2)
  }
  
  
  return (
    <CelularContainerStyled isOpen={isOpen} >
      <WrapperCelularData editable={editable} isOpen={isOpen}>
        <div>
          <HiChevronRight onClick={handleSetaOPen} className="seta"/>
        </div>
        <div>
          <input type="text" value={marca} onChange={(e)=> setMarca(e.target.value)} readOnly={!editable} />
        </div>
        <div>
          <input type="text" value={modelo} onChange={(e)=> setModelo(e.target.value)} readOnly={!editable} />
        </div>
        <div>
          <input type="text" value={imei1} onChange={(e)=> setImei1(e.target.value)} readOnly={!editable} />
        </div>
        <div>
          <input type="text" value={imei2} onChange={(e)=> setImei2(e.target.value)} readOnly={!editable} />
        </div>
        <div>
          <MdModeEdit onClick={handleEdite}/>
          <MdDelete onClick={handleDelete}/>
        </div>
      </WrapperCelularData>
      <div className='hidden-content'>
        <img src={data.imgName ? fotoCelular : celularFake} alt="foto celular" />
        <div>
          <p>Id: {data.id}</p>
          <p>Img Nome: {data.imgName}</p>
          <label>
            <span>Foto: </span>
            <input type="file" disabled={!editable} onChange={(e)=> setFile(e.currentTarget.files) }/>
          </label>
        </div>
        <div className='div-btns'>
          <ButtonDefault isDisabled={!editable} typeBtn='button' value='Salvar' click={handleUpdate} />
          <ButtonDefault isDisabled={!editable} click={handleCancel} typeBtn='button' value='Cancelar' />
        </div>
      </div>
    
    </CelularContainerStyled>
    )
  }
