import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Utilisation de useRoute pour accéder aux params

  const [paymentMethod, setPaymentMethod] = useState(null); // État pour le moyen de paiement sélectionné

  // Récupérer tous les paramètres passés depuis la page Passenger
  const {
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
  } = route.params || {}; // Définir un objet vide par défaut si undefined

  // Calculer le nombre de personnes basé sur le nombre de sièges
  const numberOfPeople = seats ? seats.length : 0; // On suppose que "seats" est un tableau

  // Vérifier si les données sont présentes avant d'afficher
  if (!from || !to || numberOfPeople === 0 || price === undefined) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: Missing parameters!</Text>
      </SafeAreaView>
    );
  }

  // Récupérer l'heure actuelle
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Fonction pour gérer le changement du moyen de paiement
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#1a2b47" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={styles.timeContainer}>
          <Icon name="time-outline" size={16} color="#666" />
          <Text style={styles.headerTime}>{currentTime}</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Payment Details Section */}
        <Text style={styles.sectionTitle}>Payment details:</Text>

        <View style={styles.detailsCard}>
          {/* Tickets */}
          <Text style={styles.subSectionTitle}>Tickets</Text>
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>{from} --- {to}</Text> {/* Affiche les villes de départ et arrivée */}
          </View>
          <View style={[styles.itemRow, styles.lastItemInSection]}>
            <Text style={styles.itemText}>{numberOfPeople} personne{numberOfPeople > 1 ? 's' : ''}</Text> {/* Affiche le nombre de places réservées */}
          </View>
          {/* Total */}
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>FCFA {price}</Text> {/* Affiche le prix */}
          </View>
        </View>

        {/* Promo Code */}
        <View style={styles.promoInputContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Promo code:"
            placeholderTextColor="#666"
          />
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentMethodsSection}>
          <Text style={styles.sectionTitle}>Pay with:</Text>

          {/* Cards Option */}
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => handlePaymentMethodChange('card')}
          >
            <View style={styles.paymentOptionLeft}>
              <Text style={styles.paymentOptionText}>Credit cards or Mobile pay</Text>
              <View style={styles.cardIconsContainer}>
                <Icon name="card" size={20} color="#1a1f71" style={styles.cardIcon} />
                <Icon name="card" size={20} color="#ff5f00" style={styles.cardIcon} />
                <Icon name="card" size={20} color="#2671b9" style={styles.cardIcon} />
              </View>
            </View>
            <Icon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>

          {/* MOMO Option */}
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => handlePaymentMethodChange('momo')}
          >
            <View style={styles.paymentOptionLeft}>
              <Text style={styles.paymentOptionText}>MOMO</Text>
            </View>
            <Icon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>

          {/* OM Option */}
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => handlePaymentMethodChange('om')}
          >
            <View style={styles.paymentOptionLeft}>
              <Text style={styles.paymentOptionText}>OM</Text>
            </View>
            <Icon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Pay Button */}
        <TouchableOpacity
          style={styles.payButton}
          onPress={() =>
            navigation.navigate('Payment_S', {
              
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
              sendMail,
            })
          }
        >
          <Text style={styles.payButtonText}>
            Pay FCFA {price} with {paymentMethod || 'selected method'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
