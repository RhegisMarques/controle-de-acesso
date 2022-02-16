import React from 'react'
import { ButtonDefault } from '../../../components/ButtonDefault'
import { CelularesComponent } from '../../../components/CelularesComponent'
import { SearchComponent } from '../../../components/SearchComponent'
import { AxiosApi } from '../../../services/AxiosApi'
import { ContainerStyled, WrapperTitle } from "./styles"
import { GlobalContext } from "../../../contexts/GlobalContext"

  
type Celular= {
  marca: string,
  modelo: string,
  imgName?: string,
  id: string,
  imeis: {
    imei1: string,
    imei2?: string
  }
}



export const Celulares = () => {
  const [dataCelulares, setDataCelulares] = React.useState<Celular[] | []>([])
  const { setLoad } = React.useContext(GlobalContext)
 

  React.useEffect( ()=> {
    setLoad(true)
    AxiosApi.get("celulares")
    .then( (response)=> setDataCelulares(response.data))
    .finally( ()=>  setLoad(false))
  }, [setLoad] )
  
  


  return (
    <ContainerStyled>
      <WrapperTitle >
        <h1>Celulares</h1>
        <ButtonDefault typeBtn='button' value='Novo Celular'/>
      </WrapperTitle>
      <SearchComponent placeHolderTxt='Celular' />
      <CelularesComponent data={dataCelulares} />
    </ContainerStyled>
  )
}
