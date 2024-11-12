import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { validateToken } from '../api'; // Importer la fonction de validation de token

const Welcom = ({ navigation }) => {
  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      const isValidToken = await validateToken();
      if (isValidToken) {
        navigation.navigate('Tabs'); // Rediriger vers Home (Tabs)
      } else {
        navigation.navigate('Sign_in'); // Rediriger vers la page de connexion
      }
    };

    checkTokenAndNavigate();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Travel6.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03314b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default Welcom;
