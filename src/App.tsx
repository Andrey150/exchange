import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Layout} from "components/Layout";
import {NotFound} from "components/NotFound";
import {CurrencyConverter} from "components/CurrencyConverter"
import {CurrencyListProvider} from "./components/CurrencyList";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<CurrencyListProvider/>}/>
          <Route path='/converter' element={<CurrencyConverter/>}/>
          <Route path='/courses' element={<CurrencyListProvider/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
