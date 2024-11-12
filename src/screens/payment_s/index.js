import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';

const Payment_S = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Récupérer les paramètres passés à cette page

  // Extraire tous les paramètres passés via la navigation
  const { from, to, seats, price, paymentMethod, userName, age, userPhone,departureTime,arrivalTime, gender, sendMail } = route.params || {}; 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payment Status</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.iconOuterCircle}>
          <View style={styles.iconInnerCircle}>
            <Icon name="checkmark" size={40} color="#ffffff" />
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.successTitle}>Payment Successful!</Text>
        <Text style={styles.successMessage}>
          Your payment is processed and your ticket is confirmed!
        </Text>
      </View>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.viewTicketButton} 
          onPress={() => 
            navigation.navigate('Ticket_D', {
              
              departureTime,
              arrivalTime,
              from,
              to,
              seats,
              price,
              paymentMethod,
              userName,
              age,
              userPhone,
              gender,
              sendMail
            })
          }
        >
          <Text style={styles.viewTicketText}>View Ticket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment_S;
