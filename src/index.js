import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SettingContextProvider from './Context/SettingContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingContextProvider>
    <App />
  </SettingContextProvider>
);

