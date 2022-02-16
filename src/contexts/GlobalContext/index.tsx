import React, { createContext } from "react";
import { AxiosApi } from "../../services/AxiosApi";


type UserProps = {
  id: string,
  identificacao: string,
  imgName?: string,
  imgPath?: string,
  username?: string, 
  password?: string,
  autorizado: boolean,
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
  created_at: Date,
  updated_at: Date
}

interface IGlobaContextProps {
  load: boolean;
  setLoad: ( load: boolean )=> void;
  login: boolean;
  setLogin: (isLogin: boolean) => void;
  mainAdminHomeWidth: number;
  setMainAdminHomeWidth: (w:number) => void;
  userData: UserProps,
  setUserData: (data: UserProps)=>void;
  modalUserData: UserProps,
  setModalUserData: (data: UserProps)=>void;
  modalIsOpen: boolean;
  setModalIsOpen: (open: boolean)=> void
}

interface IGlobalContextProviderProps {
  children : React.ReactNode
}


export const GlobalContext = createContext<IGlobaContextProps>({} as IGlobaContextProps)


export const GlobalContextProvider = (props: IGlobalContextProviderProps) => {
  const [load, setLoad] = React.useState<boolean>(false)
  const [login, setLogin] = React.useState<boolean>(false)
  const [mainAdminHomeWidth, setMainAdminHomeWidth] = React.useState<number>(40)
  const [userData, setUserData] = React.useState({} as UserProps) 
  const [modalUserData, setModalUserData] = React.useState({} as UserProps) 
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  




  React.useEffect(()=> {
    setLogin(false)
    setLoad(true)
    let token = window.sessionStorage.getItem("token")
    let nome = window.sessionStorage.getItem("nome")
    if(token) {
      AxiosApi.get("colaboradores/" + nome).then( data => setUserData(data.data[0]) )
      setLogin(true)
    }
    setLoad(false)
  }, [] )
  
  
  return <GlobalContext.Provider value={{
    load, setLoad,
    login, setLogin,
    mainAdminHomeWidth, setMainAdminHomeWidth,
    userData, setUserData,
    modalIsOpen, setModalIsOpen,
    modalUserData, setModalUserData
  }}>
    {props.children}
  </ GlobalContext.Provider>
}