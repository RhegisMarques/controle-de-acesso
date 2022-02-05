import React from 'react';
import { useRoutes } from 'react-router';
import {Navigate} from "react-router-dom"
import { Login } from '../../../pages/Admin/Login';
import {GuardaVolumes } from "../../../pages/Admin/GuardaVolumes"
import { ControleDeChaves } from "../../../pages/Admin/ControleDeChaves"
import { Colaboradores } from '../../../pages/Admin/Colaboradores';

export const AdminRoutes = () => {
  
  return useRoutes([
    {
      path: "",
      children: [
        {path: "", element: <Navigate to="/admin/colaboradores" />},
        {path: "/colaboradores", element: <Colaboradores />},
        {path: "/login", element: <Login />},
        {path: "/guardavolumes", element: <GuardaVolumes />},
        {path: "/controledechaves", element: <ControleDeChaves />},

      ]
    },
  ])
  
  
};
