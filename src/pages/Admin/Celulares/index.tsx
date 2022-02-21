import React from 'react'
import { ButtonDefault } from '../../../components/ButtonDefault'
import { SearchComponent } from '../../../components/SearchComponent'
import { AxiosApi } from '../../../services/AxiosApi'
import { ContainerStyled, WrapperTitle } from "./styles"
import { GlobalContext, ICelular } from "../../../contexts/GlobalContext"
import { useQuery } from "react-query"
import { WrapperListComponet } from '../../../components/WrapperListComponent'
import { CelularComponet } from "../../../components/CelularComponent"




export const Celulares = () => {
  const [dataCelulares, setDataCelulares] = React.useState<ICelular[] | []>([])
  const { setLoad } = React.useContext(GlobalContext)
  
  const titles = ["Marca", "Modelo", "Imei1", "Imei2", "Ações"]
  
  
  const {} = useQuery("celulares", async ()=>{
    setLoad(true)
    try {
      const response = await AxiosApi.get("celulares")
      setDataCelulares(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoad(false)
    }
  })
  
  
  
  
  return (
    <ContainerStyled>
      <WrapperTitle >
        <h1>Celulares</h1>
        <ButtonDefault typeBtn='button' value='Novo Celular'/>
      </WrapperTitle>
      <SearchComponent placeHolderTxt='Celular' />
      <WrapperListComponet titles={titles} >
        {dataCelulares.map( celular => <CelularComponet key={celular.id} data={celular} />)}
      </WrapperListComponet>
    </ContainerStyled>
    )
  }
