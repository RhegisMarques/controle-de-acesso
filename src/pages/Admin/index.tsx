import React from 'react';
import { Route, Routes, Navigate , Outlet} from 'react-router-dom';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { Login } from './Login';
import { GlobalContext } from '../../contexts/GlobalContext';




export const Admin = () => {
  const {login} = React.useContext(GlobalContext)
  
  
  
  
  return (
    <>
      <Routes>
        {login ? <Route path="*" element={<Navigate to="/" />} />  :  <Route path="" element={<Login />} />}
      </Routes>
    </>
      ) 
      
    };
