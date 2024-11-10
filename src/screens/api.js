import axios from 'axios';

// L'URL de base de ton API backend
const apiUrl = 'http://192.168.1.149:3000'; // Remplacez '192.168.x.x' par l'adresse IP de ton ordinateur

// Fonction pour obtenir les données d'un client
export const getClientById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/api/clients/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données du client', error);
    throw error; // Relancer l'erreur pour gestion ultérieure
  }
};

// Fonction pour créer un nouveau client
export const createClient = async (clientData) => {
  try {
    const response = await axios.post(`${apiUrl}/api/clients`, clientData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du client', error);
    throw error;
  }
};

// Fonction pour mettre à jour les données d'un client
export const updateClient = async (id, clientData) => {
  try {
    const response = await axios.put(`${apiUrl}/api/clients/${id}`, clientData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du client', error);
    throw error;
  }
};

// Fonction pour supprimer un client
export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/api/clients/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression du client', error);
    throw error;
  }
};
