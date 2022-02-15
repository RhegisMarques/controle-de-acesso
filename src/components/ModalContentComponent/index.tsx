import React from 'react'
import { InputComponent } from '../InputComponent'
import {ContainerModalContentStyled} from "./styles"
import { IoClose } from "react-icons/io5"
import { GlobalContext } from "../../contexts/GlobalContext"
import { ButtonDefault } from '../ButtonDefault'





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
  autorizado?: boolean,
  created_at: Date,
  updated_at: Date
}





export const ModalContentComponent = ({user}:{user: IColaboradorProps}) => {
  const { setModalIsOpen } = React.useContext(GlobalContext)
  
  
  
  
  
  return (
    <ContainerModalContentStyled>
      <IoClose className="close" onClick={()=> setModalIsOpen(false)} />
      <form action="">
    
        <fieldset >
          <legend>COLABORADOR</legend>
          <div className='colaborador-primeira-div'>
            <div>
              <InputComponent type='text' req={true} placeHolder='Identificacao' userValue={user.identificacao}/>
            </div>
            <div>
              <InputComponent type='text' req={true} placeHolder='Nome' userValue={user.nome} />
            </div>
            <div>
              <InputComponent req={false} type='text' placeHolder='Cargo' userValue={user.cargo}/>
            </div>
          </div>
          <div className='colaborador-segunda-div'>
            <div>
              <InputComponent type='text' placeHolder='UserName' userValue={user.username} readonly={true}/>
            </div>
            <div>
              <InputComponent type='password' req={false} placeHolder='Password' userValue={user.password}/>
            </div>
            <div className='div-input-radios'>
              <p>Acesso com dispositivo ?</p>
              <div>
                <input id='sim' name="autorizado" type="radio" value="true"/>
                <label htmlFor="sim">Sim</label>
              </div>
              <div>
                <input id='nao' name="autorizado" type="radio" value="false"/>
                <label htmlFor="nao">Não</label>
              </div>
            </div>
            <div>
              <input type="file" />
            </div>
          </div>
        </fieldset>
    
        { user.celular && <fieldset>
      
          <legend>CELULAR</legend>
          <div className='celular'>
      
            <div className='wrapper1'>
              <div>
                <InputComponent type='text' req={true} placeHolder='Marca' userValue={user.celular?.marca}/>
              </div>
              <div>
                <InputComponent type='text' req={true} placeHolder='Modelo' userValue={user.celular?.modelo}/>
              </div>
            </div>
      
            <div className='wrapper1'>
              <div>
                <InputComponent type='text' req={true} placeHolder='Imei1' userValue={user.celular?.imeis.imei1}/>
              </div>
              <div>
                <InputComponent type='text' req={false} placeHolder='Imei2'userValue={user.celular?.imeis.imei2}/>
              </div>
            </div>
      
            <div>
              <input type="file" />
            </div>
          </div>
      
        </fieldset> }
      
        { user.notebook && <fieldset>
          <legend>NOTEBOOK</legend>
          <div className='notebook'>
            <div className='wrapper1'>
              <div>
                <InputComponent type='text' req={true} placeHolder='Marca' userValue={user.notebook?.marca}/>
              </div>
              <div>
                <InputComponent type='text' req={true} placeHolder='Modelo' userValue={user.notebook?.modelo}/>
              </div>
            </div>
        
            <div className='wrapper1'>
              <div>
                <InputComponent type='number' req={false} placeHolder='Patrimonio' userValue={user.notebook?.numeroPatrimonio}/>
              </div>
              <div>
                <InputComponent type='text' req={true} placeHolder='Numero de serie' userValue={user.notebook?.numeroSerie}/>
              </div>
            </div>
        
            <div>
              <input type="file" />
            </div>
          </div>
        </fieldset> }
        
        <div className='container-btns'>
          <ButtonDefault value='Cancelar' click={()=> setModalIsOpen(false)} />
          <ButtonDefault value='Salvar'/>
        </div>
      </form>
    </ContainerModalContentStyled>
        )
      }
