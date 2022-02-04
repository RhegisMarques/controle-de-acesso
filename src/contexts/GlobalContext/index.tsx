import React, { createContext } from "react";


interface IGlobaContextProps {
  load: boolean;
  setLoad: ( load: boolean )=> void;
  login: boolean;
  setLogin: (isLogin: boolean) => void
}

interface IGlobalContextProviderProps {
  children : React.ReactNode
}


export const GlobalContext = createContext<IGlobaContextProps>({} as IGlobaContextProps)


export const GlobalContextProvider = (props: IGlobalContextProviderProps) => {
  const [load, setLoad] = React.useState<boolean>(false)
  const [login, setLogin] = React.useState<boolean>(false)
  
  
  React.useEffect(()=> {
    setLogin(false)
    let token = window.sessionStorage.getItem("token")
    if(token) setLogin(true)
  }, [] )
  
  
  
  
  return <GlobalContext.Provider value={{
    load, setLoad,
    login, setLogin
  }}>
    {props.children}
  </ GlobalContext.Provider>
}