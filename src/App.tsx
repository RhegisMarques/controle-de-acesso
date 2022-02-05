import React from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import {Loading} from "./components/Loading"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from './pages/Home';
import { Admin } from "./pages/Admin/index"
import {GlobalContextProvider} from "./contexts/GlobalContext"
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminRoutes } from './routes/Protectedes/AdminRoutes';

function App() {
  
  return (
    <>
      <GlobalStyles />
      <GlobalContextProvider >
        <Loading color="#0390d5" type='bars' w={50} h={50}/>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Navigate to="/admin/login" /> } />
            <Route path="admin/*" 
              element={ 
                <ProtectedRoute >
                  <Admin />
                </ProtectedRoute> }/>      
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
      );
    }
    
    export default App;
