import React from 'react';
import { ButtonDefault } from '../../../components/ButtonDefault';
import { SearchComponent } from '../../../components/SearchComponent';
import { ColaboradorComponent } from '../../../components/ColaboradorComponent';
import { ColaboradoresContainerStyled, WrapColaboradoresTitleStyled } from './styles';
import { AxiosApi } from '../../../services/AxiosApi';
import { GlobalContext }  from "../../../contexts/GlobalContext/index"



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


export const Colaboradores = () => {
  const [usersData, setUsersData] = React.useState<IColaboradorProps[]>([ {} as IColaboradorProps]) 
  const { setLoad } = React.useContext(GlobalContext)
 
  React.useEffect( ()=> {
    setLoad(true)
    AxiosApi.get("colaboradores")
    .then( response => {
      setUsersData(response.data)
      console.log(response.data)
    }).finally( ()=> setLoad(false) )  
  }, [] )
  
  
  
  
  
  return( 
    <ColaboradoresContainerStyled>
      <WrapColaboradoresTitleStyled >
        <h2>Colaboradores</h2>
        <ButtonDefault  value='Novo Colaborador' />
      </WrapColaboradoresTitleStyled>
      <SearchComponent />
      <ColaboradorComponent data={usersData} />
    </ColaboradoresContainerStyled>
    )
  };
  
  
  