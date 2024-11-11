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
    const response = await axios.post(`${apiUrl}/api/auth/loginClient`, {
      login: form.phone,
      password: form.password
    });
    return {
      token: response.data.token,
      clientId: response.data.clientId
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erreur de connexion');
  }
};

// Fonction pour déconnecter un client
export const logoutUser = async () => {
  try {
    const token = await getToken();
    await axios.post(`${apiUrl}/api/auth/logoutClient`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await AsyncStorage.removeItem('userToken'); // Supprimer le token du stockage local
    await AsyncStorage.removeItem('userId'); // Supprimer l'id du client
  } catch (error) {
    console.error('Erreur lors de la déconnexion', error);
  }
};

// Fonction pour mettre à jour les informations du client
export const updateClient = async (clientId, updatedData) => {
  const token = await getToken();

  try {
    const response = await axios.put(`${apiUrl}/api/clients/${clientId}`,
      updatedData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour des informations du client', error);
    throw error;
  }
};

// Fonction pour enregistrer un client
export const registerClient = async (form) => {
  try {
    const response = await axios.post(`${apiUrl}/api/auth/registerClient`, {
      nom_client: form.name,
      prenom_client: form.firstName,
      telephone_client: form.phone,
      num_cni_client: form.cniNumber,
      date_nais: form.birthDate,
      password: form.password,
    });

    // Si l'inscription est réussie, stockez l'id du client et le token
    const { token, clientId } = response.data;
    await AsyncStorage.setItem('userToken', token); // Stocker le token
    await AsyncStorage.setItem('userId', clientId.toString()); // Stocker l'ID du client

    return response.data; // Retourne la réponse du backend
  } catch (error) {
    console.error('Erreur lors de l\'inscription du client:', error);
    throw new Error(error.response?.data?.message || 'Erreur d\'inscription');
  }
};


export const getSeats = async (id_voyage) => {
  try {
    const token = await getToken(); // Récupérer le token depuis AsyncStorage
    const response = await axios.get(`${apiUrl}/api/voyages/${id_voyage}/places-with-location`, {
      headers: {
        Authorization: `Bearer ${token}` // Ajout du token d'authentification
      }
    });
    return response.data;  // Retourne les places disponibles
  } catch (error) {
    console.error('Erreur lors de la récupération des places', error);
    throw error;
  }
};

// Fonction pour obtenir les places réservées d'un voyage
export const getBookedSeats = async (id_voyage) => {
  try {
    const token = await getToken();  // Si vous utilisez un token pour l'authentification
    const response = await axios.get(`${apiUrl}/api/voyages/${id_voyage}/booked-places`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Assurez-vous d'inclure le token d'authentification
      },
    });

    // Affichage des données récupérées
    console.log("Booked Seats Response:", response.data);

    const bookedSeatsData = response.data;  // Assurez-vous que la réponse est bien un tableau

    if (Array.isArray(bookedSeatsData)) {
      // Si bookedSeatsData est bien un tableau, vous pouvez l'utiliser ici
      console.log("Booked seats:", bookedSeatsData);

      // Affichage de chaque place réservée avec le numéro de ligne
      bookedSeatsData.forEach(seat => {
        console.log(`Place ${seat.numero_place} sur le côté ${seat.cote}, Ligne ${seat.numero_ligne}`);
      });
      
    } else {
      console.error("Erreur : bookedSeatsData n'est pas un tableau", bookedSeatsData);
    }

    return bookedSeatsData;

  } catch (error) {
    console.error("Erreur lors de la récupération des places réservées", error);
    throw error;
  }
};


