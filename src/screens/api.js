import axios from 'axios';

// L'URL de base de ton API backend
const apiUrl = 'http://192.168.1.176:3000'; // Remplacez '192.168.x.x' par l'adresse IP de votre ordinateur

// Fonction pour obtenir les données d'un client
export const getClientById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/api/clients/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données du client', error);
    throw error; 
  }
};

// Fonction pour obtenir tous les voyages
export const getAllVoyages = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/voyages`); 
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des voyages', error);
    throw error; 
  }
};


