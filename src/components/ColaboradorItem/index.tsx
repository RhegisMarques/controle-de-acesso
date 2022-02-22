import React from 'react'
import { ColaboradorItemStyled, WrapperShowContentStyled, WrapperHiddenContentStyled } from './styles'
import {HiChevronRight} from "react-icons/hi"
import {MdDelete, MdModeEdit} from "react-icons/md"
import { UserProps } from "../../contexts/GlobalContext"
import { ButtonDefault } from '../ButtonDefault'





export const ColaboradorItem = ({user}: {user:UserProps}) => {
  const [identificacao, setIdentificacao] = React.useState(user.identificacao)
  const [nome, setNome] = React.useState(user.nome)
  const [cargo, setCargo] = React.useState(user.cargo)
  const [editable, setEditable] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const fotoPerfil = "http://localhost:3000/public/img/uploads/" + user.imgName
  
  
  
  function handleEditable(){
    setEditable(true)
    setIsOpen(true)
  }
  
  
  
  function handleIsOpen(){
    if(isOpen) setEditable(false)
    setIsOpen(!isOpen)
  }
  
  
  
  
  
  return (
    <ColaboradorItemStyled isOpen={isOpen}>
      <WrapperShowContentStyled editable={editable}>
        <div>
          <HiChevronRight className='seta' onClick={handleIsOpen}/>
        </div>
        <div>
          <input type="text" value={identificacao} onChange={(e)=> setIdentificacao(e.target.value)} disabled={!editable}/>
        </div>
        <div>
          <input type="text" value={nome} onChange={(e)=> setNome(e.target.value)} disabled={!editable}/>
        </div>
        <div>
          <input type="text" value={cargo} onChange={(e)=> setCargo(e.target.value)} disabled={!editable}/>
        </div>
        <div className='div-btns'>
          <MdModeEdit onClick={handleEditable} />
          <MdDelete />
        </div>
      </ WrapperShowContentStyled>
      <WrapperHiddenContentStyled>
        <div className='wrapper1'>
          <div className='wrapImg'>
            <img src={fotoPerfil} alt="Foto Perfil" />
          </div>
          <div className='wrap1-context'>
            <p><strong>ImgName: </strong><span>{user.imgName}</span></p>
            <p><strong>UserName: </strong><span>{user.username}</span></p>
            <div>
              <label>
                <span><strong>Senha: </strong></span>
                <input type="text" />
              </label>
            </div>
            <div>
              <label> 
                <span>Acesso com dispositivo: </span>
                <select name="acesso" >
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className='wrapper2'>
          <h1>2</h1>
        </div>
        
        <div className='wrapper3'>
          <h1>3</h1>
        </div>

        <div className='wrapper3'>
          <ButtonDefault typeBtn='submit' value='Salvar' />
          <ButtonDefault typeBtn='button' value='Cancelar'/>
        </div>
      </WrapperHiddenContentStyled>
    </ColaboradorItemStyled>
    )
    
  }
