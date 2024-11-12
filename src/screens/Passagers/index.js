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
  const [userName, setUserName] = useState(''); // Nom de l'utilisateur
  const [userPhone, setUserPhone] = useState(''); // Numéro de téléphone
  const [userBirthday, setUserBirthday] = useState(''); // Date de naissance
  const [age, setAge] = useState(null); // Âge de l'utilisateur
  const [sendMail, setSendMail] = useState(false); // Etat pour le switch email
  const [reservations, setReservations] = useState([]); // Réservations de l'utilisateur

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const clientId = await AsyncStorage.getItem('userId');
        if (clientId) {
          // Récupérer les données du client depuis l'API
          const clientData = await getClientById(clientId);
          setUserName(clientData.nom_client);
          setUserPhone(clientData.telephone_client);
          setUserBirthday(clientData.date_nais); // On récupère la date de naissance
          
          // Calculer l'âge basé sur la date de naissance
          const calculatedAge = calculateAge(clientData.date_nais);
          setAge(calculatedAge);

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

  // Fonction pour calculer l'âge en fonction de la date de naissance
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth); 
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--; // Si l'anniversaire n'est pas encore passé cette année, on ajuste l'âge
    }
    return age;
  };

  // Fonction de navigation avec tous les paramètres
  const handlePaymentNavigation = () => {
    navigation.navigate('Payment', {
      departureTime,
      arrivalTime,
      from,
      to,
      price,
      date,
      seats,
      userName,
      age,
      userPhone,
      gender,
      sendMail,
    });
  };

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
          </View>

          {/* Name Field */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#999"
              value={userName}
              onChangeText={setUserName} // Permet de mettre à jour le nom
            />
          </View>

          {/* Age Field */}
          <View style={styles.formRow}>
            <View style={styles.ageContainer}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholderTextColor="#999"
                value={age ? age.toString() : ''}
                onChangeText={(text) => setAge(parseInt(text))} // Permet de changer l'âge
              />
            </View>

            {/* Gender Section */}
            <View style={styles.genderContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.genderOptions}>
                <TouchableOpacity
                  style={styles.genderOption}
                  onPress={() => setGender('male')}
                >
                  <View style={styles.radioContainer}>
                    <View style={[styles.radioOuter, gender === 'male' && styles.radioOuterSelected]}>
                      {gender === 'male' && <View style={styles.radioInner} />}
                    </View>
                    <Text style={[styles.genderText, gender === 'male' && styles.genderTextSelected]}>Male</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.genderOption}
                  onPress={() => setGender('female')}
                >
                  <View style={styles.radioContainer}>
                    <View style={[styles.radioOuter, gender === 'female' && styles.radioOuterSelected]}>
                      {gender === 'female' && <View style={styles.radioInner} />}
                    </View>
                    <Text style={[styles.genderText, gender === 'female' && styles.genderTextSelected]}>Female</Text>
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
              // Ajoute ici la gestion de l'email si nécessaire
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
              value={userPhone}
              onChangeText={setUserPhone} // Permet de mettre à jour le numéro de téléphone
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
          <TouchableOpacity style={styles.payButton} onPress={handlePaymentNavigation}>
            <Text style={styles.payButtonText}>Continue to pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Passenger;
