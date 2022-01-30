import React from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import {InputComponent} from "./components/InputComponent"

function App() {
  return (
    <>
      <GlobalStyles />
      <InputComponent placeHolder="Login" type='text' iconType='password'/>
    </>
  );
}

export default App;
