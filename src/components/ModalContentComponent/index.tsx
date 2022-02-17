import React from 'react'
import { InputComponent } from '../InputComponent'
import {ContainerModalContentStyled} from "./styles"
import { IoClose } from "react-icons/io5"
import { GlobalContext, UserProps } from "../../contexts/GlobalContext"
import { ButtonDefault } from '../ButtonDefault'









export const ModalContentComponent = ({user}:{user: UserProps}) => {
  const { setModalIsOpen } = React.useContext(GlobalContext)
  const [radioSelected, setRadioSelected] = React.useState<boolean>( user.autorizado )


  const valueInputRadio1 = false
  const valueInputRadio2 = true

function handleChangeRadio(e: React.ChangeEvent<HTMLInputElement>){
  const booleanOFValue = (/true/i).test(e.currentTarget.value)
  setRadioSelected(booleanOFValue)
}
  

  return (
    <ContainerModalContentStyled>
      <IoClose className="close" onClick={()=> setModalIsOpen(false)} />
      <form action="">
    
        <fieldset >
          <legend>COLABORADOR</legend>
          <div className='colaborador-primeira-div'>
            <div>
              <InputComponent type='text' req={true} placeHolder='Identificacao' inpValueProps={user.identificacao}/>
            </div>
            <div>
              <InputComponent type='text' req={true} placeHolder='Nome' inpValueProps={user.nome} />
            </div>
            <div>
              <InputComponent req={false} type='text' placeHolder='Cargo' inpValueProps={user.cargo}/>
            </div>
          </div>
          <div className='colaborador-segunda-div'>
            <div>
              <InputComponent type='text' placeHolder='UserName' inpValueProps={user.username} readonly={true}/>
            </div>
            <div>
              <InputComponent type='password' req={false} placeHolder='Password' inpValueProps={user.password}/>
            </div>
            <div className='div-input-radios'>
              <p>Acesso com dispositivo ?</p>
              <div>
                <label >
                  <input name="autorizado" type="radio"  value="true"  
                    onChange={handleChangeRadio}
                    checked={ valueInputRadio2 === radioSelected }/>
                  Sim</label>
              </div>
              <div>
                <label >
                  <input name="autorizado" type="radio" value="false" 
                    onChange={handleChangeRadio}
                    checked={ valueInputRadio1 === radioSelected } />
                  Não</label>
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
                <InputComponent type='text' req={true} placeHolder='Marca' inpValueProps={user.celular?.marca}/>
              </div>
              <div>
                <InputComponent type='text' req={true} placeHolder='Modelo' inpValueProps={user.celular?.modelo}/>
              </div>
            </div>
      
            <div className='wrapper1'>
              <div>
                <InputComponent type='text' req={true} placeHolder='Imei1' inpValueProps={user.celular?.imeis.imei1}/>
              </div>
              <div>
                <InputComponent type='text' req={false} placeHolder='Imei2' inpValueProps={user.celular?.imeis.imei2}/>
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
                <InputComponent type='text' req={true} placeHolder='Marca' inpValueProps={user.notebook?.marca}/>
              </div>
              <div>
                <InputComponent type='text' req={true} placeHolder='Modelo' inpValueProps={user.notebook?.modelo}/>
              </div>
            </div>
        
            <div className='wrapper1'>
              <div>
                <InputComponent type='number' req={false} placeHolder='Patrimonio' inpValueProps={user.notebook?.numeroPatrimonio}/>
              </div>
              <div>
                <InputComponent type='text' req={true} placeHolder='Numero de serie' inpValueProps={user.notebook?.numeroSerie}/>
              </div>
            </div>
        
            <div>
              <input type="file" />
            </div>
          </div>
        </fieldset> }
        
        <div className='container-btns'>
          <ButtonDefault typeBtn='button' value='Cancelar' click={()=> setModalIsOpen(false)} />
          <ButtonDefault value='Salvar' typeBtn='submit'/>
        </div>
      </form>
    </ContainerModalContentStyled>
        )
      }
