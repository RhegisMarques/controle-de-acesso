import React from 'react'
import { ButtonDefault } from '../../../components/ButtonDefault'
import { CelularesComponent } from '../../../components/CelularesComponent'
import { SearchComponent } from '../../../components/SearchComponent'
import { AxiosApi } from '../../../services/AxiosApi'
import { ContainerStyled, WrapperTitle } from "./styles"
import { GlobalContext, ICelular } from "../../../contexts/GlobalContext"
import { useQuery } from "react-query"
import { MyModal } from '../../../components/MyModal'
import { CelularContentModal } from '../../../components/CelularesComponent/CelularContentModal'






export const Celulares = () => {
  const [dataCelulares, setDataCelulares] = React.useState<ICelular[] | []>([])
  const { setLoad, modalCelularData } = React.useContext(GlobalContext)
  
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
      <MyModal >
        <CelularContentModal data={modalCelularData}/>
      </MyModal>
      <WrapperTitle >
        <h1>Celulares</h1>
        <ButtonDefault typeBtn='button' value='Novo Celular'/>
      </WrapperTitle>
      <SearchComponent placeHolderTxt='Celular' />
      <CelularesComponent data={dataCelulares} />
    </ContainerStyled>
    )
  }
