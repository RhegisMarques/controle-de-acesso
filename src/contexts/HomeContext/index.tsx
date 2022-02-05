import React from 'react';

interface IHomeContextProps {
  w: number,
  setW: (w: number)=> void
}


export const HomeContext = React.createContext<IHomeContextProps>({} as IHomeContextProps)

export const HomeContextProvider = ({children}:{children:JSX.Element})=>{
  const [w, setW] = React.useState<number>(40)



  return <HomeContext.Provider value={{w, setW}}>{children}</HomeContext.Provider>
}