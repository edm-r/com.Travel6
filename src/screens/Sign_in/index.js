// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style.js';
import { loginUser } from '../api'; // Importer la fonction login
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sign_in = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    phone: '',
    password: ''
  });

  // State pour gérer les erreurs et les chargements
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError(''); // Réinitialiser les erreurs
    try {
      const response = await loginUser(form); // Appel à l'API pour la connexion

      // Assurez-vous que la réponse contient un token et l'ID du client
      const { token, clientId } = response; // Supposons que l'API renvoie un champ clientId

      // Stocker le token et l'ID du client dans AsyncStorage
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('clientId', clientId.toString()); // Assurez-vous que l'ID est sous forme de chaîne

      // Afficher le token, l'ID du client et les données saisies dans la console
      console.log('Token:', token);
      console.log('Client ID:', clientId);
      console.log('User Data:', form);

      // Rediriger vers les tabs après la connexion
      navigation.navigate('Tabs');
    } catch (err) {
      setError('Erreur de connexion. Vérifiez vos informations et réessayez.');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/Travel_6.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Please login to continue
      </Text>

      {error && <Text style={{ color: 'red' }}>{error}</Text>} 

      <View style={styles.form}>
        <Text style={styles.label}>Phone or CNI</Text>
        <TextInput
          style={styles.input}
          value={form.phone}
          onChangeText={(text) => setForm({...form, phone: text})}
          placeholder="Enter your phone number or CNI"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={form.password}
          onChangeText={(text) => setForm({...form, password: text})}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.text}>Register now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sign_in;
