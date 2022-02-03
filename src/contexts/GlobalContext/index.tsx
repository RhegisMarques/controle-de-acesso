import axios from "axios";
import React, { createContext } from "react";
import { AxiosApi } from "../../services/AxiosApi";


interface IUserContextProps {
  load: boolean;
  setLoad: ( load: boolean )=> void;
  login: boolean;
  setLogin: (isLogin: boolean) => void
}

interface IUserContextProviderProps {
  children : React.ReactNode
}


export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)


export const UserContextProvider = (props: IUserContextProviderProps) => {
  const [load, setLoad] = React.useState<boolean>(true)
  const [login, setLogin] = React.useState<boolean>(false)
  
  
  React.useEffect(()=> {
    setLogin(false)
    let token = window.sessionStorage.getItem("token")
    if(token) setLogin(true)
  }, [] )



  
  return <UserContext.Provider value={{
    load, setLoad,
    login, setLogin
  }}>{props.children}</ UserContext.Provider>
}