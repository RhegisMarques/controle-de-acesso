import React from 'react'
import { InputComponent } from '../InputComponent'
import {ContainerModalContentStyled} from "./styles"





export const ModalContentComponent = () => {











  
  return (
    <ContainerModalContentStyled>
      <form action="">
    
        <fieldset >
          <legend>COLABORADOR</legend>
          <div className='colaborador-primeira-div'>
            <div>
              <InputComponent type='text' placeHolder='Identificacao' />
            </div>
            <div>
              <InputComponent type='text' placeHolder='Nome' />
            </div>
            <div>
              <InputComponent type='text' placeHolder='Cargo' />
            </div>
          </div>
          <div className='colaborador-segunda-div'>
            <div>
              <InputComponent type='text' placeHolder='UserName' />
            </div>
            <div>
              <InputComponent type='password' placeHolder='Password' />
            </div>
            <div>
              <input type="file" />
            </div>
          </div>
        </fieldset>
    
        <fieldset>
          <legend>CELULAR</legend>
          <div className='celular'>
    
            <div className='wrapper1'>
              <div>
                <InputComponent type='text' placeHolder='Marca' />
              </div>
              <div>
                <InputComponent type='text' placeHolder='Modelo' />
              </div>
            </div>
    
            <div className='wrapper1'>
              <div>
                <InputComponent type='number' placeHolder='Imei1' />
              </div>
              <div>
                <InputComponent type='number' placeHolder='Imei2' />
              </div>
            </div>
    
            <div>
              <input type="file" />
            </div>
          </div>
    
        </fieldset>
    
        <fieldset>
          <legend>NOTEBOOK</legend>
          <div className='notebook'>
            <div className='wrapper1'>
              <div>
                <InputComponent type='text' placeHolder='Marca' />
              </div>
              <div>
                <InputComponent type='text' placeHolder='Modelo' />
              </div>
            </div>
    
            <div className='wrapper1'>
              <div>
                <InputComponent type='number' placeHolder='Patrimonio' />
              </div>
              <div>
                <InputComponent type='number' placeHolder='Numero de serie' />
              </div>
            </div>
    
            <div>
              <input type="file" />
            </div>
          </div>
        </fieldset>
    
      </form>
    </ContainerModalContentStyled>
    )
  }
