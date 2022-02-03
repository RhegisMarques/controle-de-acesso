import React from 'react';
import { Route } from 'react-router-dom';

interface IRouteProps {
  path: string;
  element: JSX.Element
}

export const ProtectedRoute = (props: IRouteProps) => {
  return <Route {...props} />
};
