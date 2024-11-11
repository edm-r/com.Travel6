import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { registerClient } from '../api'; // Importer la fonction registerClient
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importer AsyncStorage
import styles from './style';

const Register = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    password: '',
    firstName: '',
    cniNumber: '',
    birthDate: '',
  });

  // Fonction pour gérer l'enregistrement
  const handleRegister = async () => {
    const { name, firstName, phone, password, cniNumber, birthDate } = form;

    // Validation basique des champs
    if (!name || !firstName || !phone || !password || !cniNumber || !birthDate) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    // Validation du format de la date de naissance (AAAA-MM-DD)
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(birthDate)) {
      Alert.alert('Erreur', 'Date de naissance invalide, format attendu : AAAA-MM-DD');
      return;
    }

    try {
      const response = await registerClient(form); // Appel de l'API d'enregistrement
      if (response) {
        const { token, clientId } = response; // Déstructurer le token et clientId

        // Stocker le token et l'ID du client dans AsyncStorage
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('clientId', clientId.toString()); // Stocker l'ID sous forme de chaîne

        Alert.alert('Succès', 'Inscription réussie');
        navigation.navigate('Tabs'); // Naviguer vers la page de connexion
      }
    } catch (error) {
      console.error('Erreur d\'enregistrement:', error);
      Alert.alert('Erreur', 'Une erreur est survenue, veuillez réessayer');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste le comportement en fonction du système d'exploitation
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/Travel_6.png')}
            style={styles.logo}
          />

          <Text style={styles.title}>Enter your information</Text>
          <Text style={styles.subtitle}>
            Fill up your personal information for seamless experience
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={form.firstName}
              onChangeText={(text) => setForm({ ...form, firstName: text })}
              placeholder="Enter your first name"
            />

            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
              placeholder="Enter your name"
            />

            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />

            <Text style={styles.label}>CNI Number</Text>
            <TextInput
              style={styles.input}
              value={form.cniNumber}
              onChangeText={(text) => setForm({ ...form, cniNumber: text })}
              placeholder="Enter your CNI number"
            />

            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={form.birthDate}
              onChangeText={(text) => setForm({ ...form, birthDate: text })}
              placeholder="YYYY-MM-DD"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Sign_in')}>
            <Text style={styles.text}>Sign in now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
