import React, { createContext } from "react";


interface IUserContextProps {
  load: boolean;
  setLoad: ( load: boolean )=> void
}

interface IUserContextProviderProps {
  children : React.ReactNode
}


export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)


export const UserContextProvider = (props: IUserContextProviderProps) => {
  const [load, setLoad] = React.useState<boolean>(true)


  return <UserContext.Provider value={{load, setLoad}}>{props.children}</ UserContext.Provider>
}