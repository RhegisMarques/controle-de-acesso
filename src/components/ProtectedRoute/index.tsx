import React from 'react';
import { GlobalContext } from "../../contexts/GlobalContext"
import { Login } from '../../pages/Admin/Login';


export const ProtectedRoute = ({children}:{children: JSX.Element}) => {
  const {login} = React.useContext(GlobalContext)
  

  return login ? children : <Login />
};
