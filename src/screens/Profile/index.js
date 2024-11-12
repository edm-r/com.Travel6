/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { getClientById, updateClient } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
  const [clientData, setClientData] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Pour afficher/masquer le formulaire d'édition
  const [formData, setFormData] = useState({
    password: '' // Le mot de passe est initialisé vide
  }); // Pour stocker les données à modifier

  const menuItems = [
    { id: 'FilterTabs', icon: 'ticket-outline', title: 'FilterTabs', screen: 'FilterTabs' },
    { id: 'offers', icon: 'pricetag-outline', title: 'Offers', screen: 'OffersScreen' },
    { id: 'faq', icon: 'time-outline', title: 'FAQ\'s & Support', screen: 'FaqScreen' },
    { id: 'about', icon: 'information-circle-outline', title: 'About Us', screen: 'AboutScreen' }
  ];
  const getClientIdFromStorage = async () => {
    try {
      const storedClientId = await AsyncStorage.getItem('clientId');
      if (storedClientId) {
        setClientId(storedClientId);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'ID du client depuis AsyncStorage', error);
    }
  };

  const fetchClientData = async () => {
    if (clientId) {
      try {
        const data = await getClientById(clientId);
        const client = data[0];
        const formattedDate = client.date_nais
          ? client.date_nais.split('T')[0]  // Récupère seulement la partie date sans l'heure
          : '';  // Si pas de date, on garde une chaîne vide
  
        setClientData(client);
        setFormData({
          ...client,
          date_nais: formattedDate,  // Met à jour la date avec le format correct
          password: '' // Assurez-vous que le mot de passe reste vide
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données du client', error);
      }
    }
  };
  

  const handleUpdate = async () => {
    try {
      await updateClient(clientId, formData); // Envoie les modifications au serveur
      fetchClientData(); // Actualiser les données après mise à jour
      setIsEditing(false); // Cacher le formulaire après l'édition
    } catch (error) {
      console.error('Erreur lors de la mise à jour du client', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.clear(); // Supprime toutes les données stockées dans AsyncStorage
      navigation.navigate('Sign_in'); // Redirige l'utilisateur vers la page de connexion
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };
  

  // Fonction pour formater la date de naissance
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options); // Format français
  };

  useEffect(() => {
    getClientIdFromStorage();
  }, []);

  useEffect(() => {
    if (clientId) {
      fetchClientData();
    }
  }, [clientId]);

  if (!clientData) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../../assets/images/Travel6_.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>{clientData.nom_client} {clientData.prenom_client}</Text>
            <Text style={styles.profilePhone}>{clientData.telephone_client}</Text>
            <Text style={styles.profileDob}>{formatDate(clientData.date_nais)}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)} // Toggle pour afficher/masquer le formulaire
        >
          <Icon name="create-outline" size={20} color="#002147" />
        </TouchableOpacity>
      </View>

      {/* Formulaire d'édition des informations du client */}
      {isEditing && (
        <View style={styles.editForm}>
          {/* Nom */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nom</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom"
              value={formData.nom_client}
              onChangeText={(text) => setFormData({ ...formData, nom_client: text })}
            />
          </View>

          {/* Prénom */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Prénom</Text>
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              value={formData.prenom_client}
              onChangeText={(text) => setFormData({ ...formData, prenom_client: text })}
            />
          </View>

          {/* Téléphone */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Téléphone</Text>
            <TextInput
              style={styles.input}
              placeholder="Téléphone"
              value={formData.telephone_client}
              onChangeText={(text) => setFormData({ ...formData, telephone_client: text })}
            />
          </View>

          {/* Numéro de CNI */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Numéro de CNI</Text>
            <TextInput
              style={styles.input}
              placeholder="Numéro de CNI"
              value={formData.num_cni_client}
              onChangeText={(text) => setFormData({ ...formData, num_cni_client: text })}
            />
          </View>

          {/* Date de Naissance */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Date de naissance</Text>
            <TextInput
              style={styles.input}
              placeholder="AAAA-MM-DD"
              value={formData.date_nais} // Affiche la date sous le format correct
              onChangeText={(text) => {
                // On valide et on met à jour la date au format correct
                if (/^\d{0,4}(-\d{0,2}){0,2}$/.test(text)) {
                  setFormData({ ...formData, date_nais: text });
                }
              }}
            />
          </View>


          {/* Mot de passe */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mot de passe</Text>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry
              value={formData.password} // Champ de mot de passe vide par défaut
              onChangeText={(text) => setFormData({ ...formData, password: text })}
            />
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleUpdate}
          >
            <Text style={styles.saveButtonText}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Menu Items */}
      {!isEditing && (
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen)} // Navigation vers l'écran associé
            >
              <View style={styles.menuItemLeft}>
                <Icon name={item.icon} size={22} color="#002147" style={styles.menuIcon} />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <Icon name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      )}

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
