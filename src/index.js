import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from "./styles/globalstyle";
import Routes from './routes';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>
);

