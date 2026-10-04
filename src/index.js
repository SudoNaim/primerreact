import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Saludos from './componets/Saludos';
import Metodos from './componets/Metodos';
import SumarNumeros from './componets/SumarNumeros'
import SaludoPadre from './componets/SaludoPadre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saludos nombre = "Naim"></Saludos>
    <Metodos></Metodos>
    <SumarNumeros numero1 = "10" numero2 = "3"></SumarNumeros>
    <SaludoPadre></SaludoPadre>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
