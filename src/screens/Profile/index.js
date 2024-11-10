/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { getClientById } from '../api'; // Assure-toi que le chemin d'importation est correct
import AsyncStorage from '@react-native-async-storage/async-storage';  // Importer AsyncStorage

const Profile = () => {
  const [clientData, setClientData] = useState(null); // Stocke les données du client
  const [clientId, setClientId] = useState(null); // ID dynamique du client

  // Fonction pour récupérer l'ID du client depuis AsyncStorage
  const getClientIdFromStorage = async () => {
    try {
      const storedClientId = await AsyncStorage.getItem('clientId');
      if (storedClientId) {
        setClientId(storedClientId);  // Met à jour l'état avec l'ID récupéré
      }
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'ID du client depuis AsyncStorage', error);
    }
  };

  // Fonction pour récupérer les données du client
  const fetchClientData = async () => {
    if (clientId) {
      try {
        console.log('Appel API pour récupérer les données du client...');
        const data = await getClientById(clientId); // Appel de la fonction pour récupérer les données du client
        console.log('Données récupérées :', data);
        setClientData(data[0]); // Prend le premier élément du tableau
      } catch (error) {
        console.error('Erreur lors de la récupération des données du client', error);
      }
    }
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('clientId'); // Retire l'ID du client de AsyncStorage
      console.log('Utilisateur déconnecté');
      // Rediriger vers une autre page si nécessaire, par exemple, vers la page de connexion.
      // Exemple : navigation.navigate('Login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };

  // Charger l'ID du client et les données au montage du composant
  useEffect(() => {
    console.log('useEffect appelé pour récupérer l\'ID du client');
    getClientIdFromStorage();  // Récupère l'ID du client depuis AsyncStorage
  }, []);

  useEffect(() => {
    if (clientId) {
      fetchClientData();  // Récupère les données du client après avoir obtenu l'ID
    }
  }, [clientId]);

  // Affiche un message de chargement tant que les données ne sont pas récupérées
  if (!clientData) {
    console.log('Aucune donnée du client encore');
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );
  }

  console.log('Données du client affichées dans le composant:', clientData);

  // Liste des éléments du menu
  const menuItems = [
    { id: 'bookings', icon: 'ticket-outline', title: 'Bookings' },
    { id: 'offers', icon: 'pricetag-outline', title: 'Offers' },
    { id: 'faq', icon: 'time-outline', title: 'FAQ\'s & Support' },
    { id: 'about', icon: 'information-circle-outline', title: 'About Us' }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../../assets/images/Travel6_.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>{clientData.nom_client} {clientData.prenom_client}</Text>
            <Text style={styles.profilePhone}>{clientData.telephone_client}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="create-outline" size={20} color="#002147" />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
          >
            <View style={styles.menuItemLeft}>
              <Icon name={item.icon} size={22} color="#002147" style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
      >
        <Icon name="log-out-outline" size={24} color="#fff" />
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
