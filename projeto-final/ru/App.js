import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { Cardapio } from './screens/Cardapio';
import { Ticket } from './screens/Ticket';
import { Sobre } from './screens/Sobre';
import { Reservas } from './screens/Reservas';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/cardapio' Component={Cardapio} />
        <Route path='/reservas' Component={Reservas} />
        <Route path='/sobre' Component={Sobre} />
        <Route path='/ticket' Component={Ticket} />
      </Routes>
    </BrowserRouter>
  );
}
