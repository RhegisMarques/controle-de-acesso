import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClientProvider } from "react-query"
import { MyQueryClient } from './contexts/QueryCliente';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={MyQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

