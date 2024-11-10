// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const Register = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState('M');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    password: ''
  });

  return (
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
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={form.name}
          onChangeText={(text) => setForm({...form, name: text})}
          placeholder="Enter your name"
        />

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
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sign_in')}>
        <Text style={styles.text}>Sign in now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;