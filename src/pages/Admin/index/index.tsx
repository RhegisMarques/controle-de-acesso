import React, { useContext } from 'react';
import {Routes, Route} from "react-router-dom"
import { MenuAdmin } from '../../../components/MenuAdminBar';
import { AdminContainer, AdminContent } from './styles';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { AdminRoutes } from '../../../routes/Protectedes/AdminRoutes';


export const Admin = () => {
  const { mainAdminHomeWidth} = useContext(GlobalContext)
  return (
    <AdminContainer>
      <MenuAdmin />
      <AdminContent sizeW={mainAdminHomeWidth}>
        <Routes>
          <Route path="*" element={ <AdminRoutes />} />
        </Routes>
      </AdminContent>
    
    </AdminContainer>
    
    )
    
    
  };
