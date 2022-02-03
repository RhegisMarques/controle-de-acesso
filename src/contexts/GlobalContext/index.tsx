import React, { createContext } from "react";


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


  return <UserContext.Provider value={{
    load, setLoad,
    login, setLogin
  }}>{props.children}</ UserContext.Provider>
}