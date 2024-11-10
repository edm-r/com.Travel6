import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiUrl = 'http://192.168.1.176:3000'; // Remplacez par l'adresse de votre API

// Fonction pour obtenir le token depuis AsyncStorage
const getToken = async () => {
  const token = await AsyncStorage.getItem('userToken');
  return token;
};

// Fonction pour obtenir les données du client avec le token
export const getClientById = async (id) => {
  try {
    const token = await getToken(); // Récupérer le token depuis AsyncStorage
    const response = await axios.get(`${apiUrl}/api/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}` // Ajout du token d'authentification
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données du client', error);
    throw error;
  }
};

// Fonction pour récupérer tous les voyages avec le token
export const getAllVoyages = async () => {
  try {
    const token = await getToken(); // Récupérer le token depuis AsyncStorage
    const response = await axios.get(`${apiUrl}/api/voyages`, {
      headers: {
        Authorization: `Bearer ${token}` // Ajout du token d'authentification
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des voyages', error);
    throw error;
  }
};

// Fonction pour connecter un client
export const loginUser = async (form) => {
  try {
    // Envoyer le numéro de téléphone ou CNI et le mot de passe
    const response = await axios.post(`${apiUrl}/api/auth/loginClient`, {
      login: form.phone, // ou num_cni_client
      password: form.password
    });

    // Retourner le token et l'ID du client depuis la réponse
    return {
      token: response.data.token,
      clientId: response.data.clientId  // Récupérer l'ID du client
    };
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    throw error; // Jeter l'erreur pour qu'elle soit capturée dans le composant
  }
};
