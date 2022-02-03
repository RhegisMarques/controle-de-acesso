import React from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import { Login } from './pages/Login';
import {Loading} from "./components/Loading"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {





  return (
    <>
      <GlobalStyles />
      <Loading load={false} color="#0390d5" type='bars' w={50} h={50}/>
      <BrowserRouter >
        <Routes>
          <Route path="/admin" element={<Login />} />        


        </Routes>
    
        
      </BrowserRouter>
    </>
  );
}

export default App;
