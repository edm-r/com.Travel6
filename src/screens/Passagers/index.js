import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getClientById, getReservations } from '../api'; // Assure-toi d'importer les fonctions de l'API
import styles from './style';

const Passenger = () => {
  const route = useRoute();
  const navigation = useNavigation();
  
  // Récupération des informations passées via la navigation
  const { departureTime, arrivalTime, from, to, price, date, seats } = route.params;

  const [gender, setGender] = useState('male');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [sendMail, setSendMail] = useState(false);
  const [reservations, setReservations] = useState([]); // État pour stocker les réservations de l'utilisateur

  useEffect(() => {
    // Fonction pour récupérer l'ID du client depuis AsyncStorage et obtenir les informations du client
    const fetchClientData = async () => {
      try {
        const clientId = await AsyncStorage.getItem('userId');
        if (clientId) {
          // Récupérer les données du client
          const clientData = await getClientById(clientId);
          setUserName(clientData.nom_client); // Exemple de champ, adapte selon la réponse de l'API
          setUserPhone(clientData.telephone_client); // Exemple de champ, adapte selon la réponse de l'API

          // Récupérer les réservations de l'utilisateur
          const userReservations = await getReservations(clientId);
          setReservations(userReservations); // Mettre à jour l'état avec les réservations
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données du client', error);
      }
    };

    fetchClientData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Passenger Details</Text>
      </View>

      <View style={styles.content}>
        {/* Boarding Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Boarding and Deboarding points:</Text>
          <View style={styles.boardingCard}>
            <View style={styles.boardingRow}>
              <View style={styles.boardingPoint}>
                <Icon name="train-outline" size={18} color="#555" />
                <Text style={styles.boardingText}>{from} @ {departureTime}</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.changeButton}>Change</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boardingDivider} />
            <View style={styles.boardingPoint}>
              <Icon name="train-outline" size={18} color="#555" />
              <Text style={styles.boardingText}>{to} @ {arrivalTime}</Text>
            </View>
          </View>
        </View>

        {/* Passenger Details Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Passenger details:</Text>
            <TouchableOpacity style={styles.addPassengerButton}>
              <Text style={styles.addPassengerText}>+ Add Passenger</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#999"
              value={userName}  // Utilise le nom de l'utilisateur récupéré
            />
          </View>

          <View style={styles.formRow}>
            <View style={styles.ageContainer}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
            <View style={styles.genderContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.genderOptions}>
                <TouchableOpacity 
                  style={styles.genderOption} 
                  onPress={() => setGender('male')}
                >
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioOuter,
                      gender === 'male' && styles.radioOuterSelected
                    ]}>
                      {gender === 'male' && <View style={styles.radioInner} />}
                    </View>
                    <Text style={[
                      styles.genderText,
                      gender === 'male' && styles.genderTextSelected
                    ]}>Male</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.genderOption}
                  onPress={() => setGender('female')}
                >
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioOuter,
                      gender === 'female' && styles.radioOuterSelected
                    ]}>
                      {gender === 'female' && <View style={styles.radioInner} />}
                    </View>
                    <Text style={[
                      styles.genderText,
                      gender === 'female' && styles.genderTextSelected
                    ]}>Female</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Contact Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Contact details:</Text>
          <View style={styles.formGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
              value={userPhone}  // Utilise le numéro de téléphone récupéré
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Switch
              value={sendMail}
              onValueChange={(value) => setSendMail(value)}  // Permet de changer l'état
            />
            <Text style={styles.checkboxLabel}>
              Send mail and message about the trip details?
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>{price} FCFA</Text>
          </View>
          <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.payButtonText}>Continue to pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Passenger;
