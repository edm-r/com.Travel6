// src/screens/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Définition des boutons et leurs routes
  const navigationButtons = [
    { path: '/client', label: 'Clients' },
    { path: '/employes', label: 'Employés' },
    { path: '/voy', label: 'Voyages' },
    { path: '/res', label: 'Réservations' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue sur le système de gestion</h1>
      <div className="button-group">
        {navigationButtons.map((button, index) => (
          <button
            key={index}
            className="home-button"
            onClick={() => handleNavigate(button.path)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;