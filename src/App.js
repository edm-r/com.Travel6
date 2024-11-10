import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import routes from '../src/Routes/Routes';  // Importer les routes depuis Routes.js
import '../src/sreen/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue sur le système de gestion</h1>
      <div className="button-group">
        <button className="home-button" onClick={handleLoginClick}>login</button>
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
