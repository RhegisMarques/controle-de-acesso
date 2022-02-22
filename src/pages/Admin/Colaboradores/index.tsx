import React from 'react';
import { ButtonDefault } from '../../../components/ButtonDefault';
import { SearchComponent } from '../../../components/SearchComponent';
import { ColaboradoresContainerStyled, WrapColaboradoresTitleStyled } from './styles';
import { AxiosApi } from '../../../services/AxiosApi';
import { GlobalContext, UserProps }  from "../../../contexts/GlobalContext/index"
import { MyModal } from '../../../components/MyModal';
import { ModalContentComponent } from '../../../components/ModalContentComponent';
import { WrapperListComponet } from '../../../components/WrapperListComponent';
import { ColaboradorItem } from '../../../components/ColaboradorItem';
import { useQuery } from "react-query"



export const Colaboradores = () => {
  const [usersData, setUsersData] = React.useState<UserProps[]>([ {} as UserProps]) 
  const { setLoad, modalUserData } = React.useContext(GlobalContext)
  
  
  const titles = ["Identificação", "Nome", "Cargo", "Ações"]

  
  const {} = useQuery("colaboradores", async ()=> {
    setLoad(true)
    try {
      const result = await AxiosApi.get("/colaboradores")
      setUsersData(result.data)
    } catch (error) {
      console.log(error)
    }finally{
      setLoad(false)
    }
    
  })
  
  
  
  return( 
    <ColaboradoresContainerStyled>
      <MyModal >
        <ModalContentComponent user={modalUserData} />
      </MyModal>
      <WrapColaboradoresTitleStyled >
        <h1>Colaboradores</h1>
        <ButtonDefault typeBtn='button'  value='Novo Colaborador' />
      </WrapColaboradoresTitleStyled>
      <SearchComponent placeHolderTxt='Identificação/Nome'/>
      <WrapperListComponet titles={titles} columns={[1, 3, 1, 1]}>
        {usersData.map( user =>  user.id && <ColaboradorItem user={user} key={`${user.id}`} />)}
      </WrapperListComponet>
    </ColaboradoresContainerStyled>
    )
  };
  
  
  