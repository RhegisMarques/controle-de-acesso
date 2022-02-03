import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import {UserContext} from "../../contexts/GlobalContext"




interface IRouteProps {
  path: string;
  element: ReactNode
}

export const ProtectedRoute = (props: IRouteProps) => {

  return <Route {...props} />
};
