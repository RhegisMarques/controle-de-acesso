import React from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import { Login } from './pages/Login';
import {Loading} from "./components/Loading"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home';
import {UserContextProvider} from "./contexts/GlobalContext"

function App() {
  
  return (
    <>
      <GlobalStyles />
      <UserContextProvider >
        <Loading color="#0390d5" type='bars' w={50} h={50}/>
        <BrowserRouter >
          <Routes>
            <Route path="/admin" element={<Login />} />        
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
    );
  }
  
  export default App;
