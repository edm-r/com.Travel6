// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style.js';

const Sign_in = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    phone: '',
    password: ''
  });

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

      <View style={styles.form}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={form.phone}
          onChangeText={(text) => setForm({...form, phone: text})}
          placeholder="Enter your phone number"
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

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tabs')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.text}>Registe now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sign_in;