import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style.js';
import { loginUser } from '../api';
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
    setError(''); // Réinitialiser les erreurs au début

    try {
      const response = await loginUser(form);

      const { token, clientId } = response;

      // Stocker le token et l'ID du client dans AsyncStorage
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('clientId', clientId.toString());

      console.log('Token:', token);
      console.log('Client ID:', clientId);
      console.log('User Data:', form);

      // Réinitialiser les champs après le login
      setForm({ phone: '', password: '' });

      // Rediriger vers les tabs après la connexion
      navigation.navigate('Tabs');
    } catch (err) {
      setError('Information saisie incorrecte, bien vouloir vérifier et réessayer.');
      // Réinitialiser les champs après le login
      setForm({ phone: '', password: '' });

      // Effacer l'erreur après 5 secondes
      setTimeout(() => setError(''), 5000);
    }

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Sign_in;
