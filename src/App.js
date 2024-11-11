import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import routes from '../src/Routes/Routes';  // Importer les routes depuis Routes.js
import '../src/sreen/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);  // Rediriger vers la route spécifiée
  };

  return (
    <div className="home-container">
      <div class="title-frame">
        <h1 class="home-title">Bienvenue sur le système de gestion</h1>
    </div>
      <div className="button-group">
        <button className="home-button" onClick={() => handleNavigate('/Client')}>Clients</button>
        <button className="home-button" onClick={() => handleNavigate('/Employes')}>Employés</button>
        <button className="home-button" onClick={() => handleNavigate('/Voy')}>Voyages</button>
        <button className="home-button" onClick={() => handleNavigate('/Res')}>Réservations</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} exact={route.exact} />
        ))}
        <Route path="/" element={<Home />} />  {/* Définir Home comme route par défaut */}
      </Routes>
    </div>
  );
};

export default App;
