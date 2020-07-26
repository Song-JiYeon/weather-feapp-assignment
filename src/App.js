import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import RouterApp from './RouterApp';
//import Math from "./Math";
//import {sum as add, multiple} from './Math'
import Header from './components/Header';
import './App.css';

function App() {
  const cityName = "Seoul";
  //const sum = "SUM!";

  //console.log(sum);
  //console.log.apply(add);
  //console.log(multiple);

  return (
    <BrowserRouter>
    <RouterApp />
    </BrowserRouter>
  );
}

export default App;
