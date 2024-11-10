// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/sreen/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue sur le système de gestion</h1>
      <div className="button-group">
        <button onClick={() => navigate('/billet')} className="home-button">Billets</button>
        <button onClick={() => navigate('/Client')} className="home-button">Clients</button>
        <button onClick={() => navigate('/Employes')} className="home-button">Employés</button>
        <button onClick={() => navigate('/Res')} className="home-button">Réservations</button>
        <button onClick={() => navigate('/Voy')} className="home-button">Voyages</button>
      </div>
    </div>
  );
};

export default Home;
