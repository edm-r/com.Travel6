import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';

const Ticket_D = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Récupérer les paramètres passés à cette page

  // Extraire tous les paramètres passés à cette page
  const {
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
    departureTime, // Heure de départ
    arrivalTime,   // Heure d'arrivée
  } = route.params || {}; // Valeur par défaut vide

  // Calculer le nombre de passagers (si "seats" est un tableau)
  const numberOfPeople = seats ? seats.length : 0;

  // Générer un numéro de ticket aléatoire
  const generateTicketNumber = () => {
    return 'TCKT' + Math.floor(Math.random() * 1000000).toString(); // Exemple de numéro de ticket
  };

  // Récupérer les sièges choisis (si applicable)
  const seatNumbers = seats ? seats.join(', ') : 'N/A';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Tabs')}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ticket Details</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Ticket Card */}
        <View style={styles.ticketCard}>
          {/* Bus Company Info */}
          <View style={styles.companySection}>
            <View style={styles.companyHeader}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../assets/images/Travel6_.png')}
                  style={styles.logo}
                />
                <Text style={styles.companyName}>Travel6</Text>
              </View>
            </View>
          </View>

          {/* Journey Details */}
          <View style={styles.journeySection}>
            <View style={styles.locationContainer}>
              <View style={styles.locationInfo}>
                <Text style={styles.stationName}>{from}</Text> {/* Affiche la ville de départ */}
                <Text style={styles.dateTime}>{departureTime || 'Oct 10, 5:50am'}</Text> {/* Affiche l'heure de départ */}
              </View>
              <View style={styles.busIconContainer}>
                <Icon name="bus-outline" size={20} color="#1a2b47" />
              </View>
              <View style={styles.locationInfo}>
                <Text style={styles.stationName}>{to}</Text> {/* Affiche la ville d'arrivée */}
                <Text style={styles.dateTime}>{arrivalTime || 'Oct 10, 11:15am'}</Text> {/* Affiche l'heure d'arrivée */}
              </View>
            </View>
          </View>

          <View style={styles.dashedDivider} />

          {/* Ticket Details Grid */}
          <View style={styles.detailsGrid}>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Passengers</Text>
                <Text style={styles.gridValue}>
                  {numberOfPeople} Personne{numberOfPeople > 1 ? 's' : ''}
                </Text> {/* Nombre de passagers */}
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Seat No.</Text>
                <Text style={styles.gridValue}>{seatNumbers}</Text> {/* Affiche les sièges choisis */}
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Ticket No.</Text>
                <Text style={styles.gridValue}>{generateTicketNumber()}</Text> {/* Numéro de ticket généré automatiquement */}
              </View>
            </View>

            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Passenger Name</Text>
                <Text style={styles.gridValue}>{userName}</Text> {/* Nom du passager */}
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Ticket Fare</Text>
                <Text style={styles.gridValue}>FCFA {price}</Text> {/* Prix du billet */}
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Payment Method</Text>
                <Text style={styles.gridValue}>{paymentMethod}</Text> {/* Méthode de paiement */}
              </View>
            </View>
          </View>

          <Text style={styles.ticketStatus}>Ticket Status - CONFIRMED</Text>

          {/* Barcode */}
          <View style={styles.barcodeContainer}>
            <Icon name="barcode-outline" size={80} color="#1a2b47" />
          </View>
        </View>

        {/* Help Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Help</Text>
          <TouchableOpacity style={styles.chatButton}>
            <Icon name="chatbubbles-outline" size={20} color="#1a2b47" />
            <Text style={styles.chatButtonText}>Chat with us</Text>
          </TouchableOpacity>
        </View>

        {/* Rating Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Rate this bus</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} style={styles.starButton}>
                <Icon name="star-outline" size={26} color="#fff" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Ticket_D;
