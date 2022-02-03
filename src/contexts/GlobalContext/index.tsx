import { createContext } from "react";

interface IContextProps {
  name: string
}


export const UserContext = createContext<IContextProps | null>(null)

export const UserContextProvider = ()=> {
  return (
    <UserC
  )
}