// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../src/sreen/login';
import Home from '../src/sreen/Home';
import Employes from '../src/sreen/employes';
import Client from '../src/sreen/clients';
import Voy from '../src/sreen/voyages';
import Res from '../src/sreen/reservations';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employes" element={<Employes />} />
        <Route path="/client" element={<Client />} />
        <Route path="/voy" element={<Voy />} />
        <Route path="/res" element={<Res />} />
      </Routes>
    </div>
  );
};

export default App;