import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { GlobalContext } from "../../contexts/GlobalContext"
import { Login } from '../../pages/Admin/Login';




interface IRouteProps {
  path: string;
  element: ReactNode
}

export const ProtectedRoute = (props: IRouteProps) => {
  const {login} = React.useContext(GlobalContext)


  return login ? <Route {...props} /> : <Login />
};
