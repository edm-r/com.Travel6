import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../sreen/ins.css'; // Assurez-vous que le chemin vers votre CSS est correct

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique d'inscription, comme la validation des champs
    console.log('Formulaire soumis:', formData);
    
    // Redirige vers la page de connexion après la soumission
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="text-center custom-title">Créer un Compte</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control custom-input"
            name="username"
            placeholder="Nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="form-control custom-input"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control custom-input"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control custom-input"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn custom-btn w-100"> S'inscrire </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
