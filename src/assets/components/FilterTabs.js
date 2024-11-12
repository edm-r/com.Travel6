import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { getReservations, getReservationsStatus } from '../../screens/api';

// Correspondance des codes de ville
const cityCodes = {
  'Yaounde': 'YDE',
  'Douala': 'DLA',
  // Ajouter d'autres villes ici si nécessaire
  // Exemple: 'Paris': 'PAR'
};

// Fonction pour formater la date au format AAAA-MM-DD
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

// Composant BookingCard
const BookingCard = ({ date, price, from, to }) => {
  const fromCode = cityCodes[from] || 'CMR';
  const toCode = cityCodes[to] || 'CMR';
  const formattedDate = formatDate(date);

  return (
    <View style={styles.bookingCard}>
      <View style={styles.routeContainer}>
        <View>
          <Text style={styles.cityCode}>{fromCode}</Text>
          <Text style={styles.cityName}>{from}</Text>
        </View>
        <View style={styles.dotLine} />
        <View>
          <Text style={styles.cityCode}>{toCode}</Text>
          <Text style={styles.cityName}>{to}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Icon name="calendar-outline" size={16} color="#666" style={styles.icon} />
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.price}>FCFA{price}</Text>
      </View>
    </View>
  );
};

// Composant pour afficher toutes les réservations (sans filtre)
const AllBookings = ({ clientId }) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getReservations(clientId); // Récupère toutes les réservations sans filtre
      setReservations(data);
    };
    fetchReservations();
  }, [clientId]);

  return (
    <View style={styles.tabContent}>
      {reservations.length > 0 ? (
        reservations.map((reservation, index) => (
          <BookingCard
            key={index}
            date={reservation.heure_depart}
            price={reservation.prix_reservation}
            from={reservation.trajet.split(' - ')[0]}
            to={reservation.trajet.split(' - ')[1]}
          />
        ))
      ) : (
        <Text>No Bookings</Text>
      )}
    </View>
  );
};

// Composant pour afficher les réservations filtrées par statut
const FilteredBookings = ({ clientId, status }) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getReservationsStatus(clientId, status); // Utilisation de getReservationsStatus
      setReservations(data);
    };
    fetchReservations();
  }, [clientId, status]);

  return (
    <View style={styles.tabContent}>
      {reservations.length > 0 ? (
        reservations.map((reservation, index) => (
          <BookingCard
            key={index}
            date={reservation.heure_depart}
            price={reservation.prix_reservation}
            from={reservation.trajet.split(' - ')[0]}
            to={reservation.trajet.split(' - ')[1]}
          />
        ))
      ) : (
        <Text>No {status} Bookings</Text>
      )}
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const FilterTabs = () => {
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    const getClientId = async () => {
      const id = await AsyncStorage.getItem('clientId');
      setClientId(id);
    };
    getClientId();
  }, []);

  if (!clientId) {
    return <Text>Loading...</Text>;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: { height: 0 },
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#666666',
        swipeEnabled: true,
      }}
    >
      {/* Onglet "All" pour lister toutes les réservations */}
      <Tab.Screen 
        name="All" 
        options={{
          tabBarLabel: 'All',
        }}>
        {() => <AllBookings clientId={clientId} />}
      </Tab.Screen>

      {/* Onglet "Active" pour les réservations actives */}
      <Tab.Screen 
        name="Active" 
        options={{
          tabBarLabel: 'Active',
        }}>
        {() => <FilteredBookings clientId={clientId} status="active" />}
      </Tab.Screen>
      
      {/* Onglet "Pending" pour les réservations en attente */}
      <Tab.Screen 
        name="Pending" 
        options={{
          tabBarLabel: 'Pending',
        }}>
        {() => <FilteredBookings clientId={clientId} status="pending" />}
      </Tab.Screen>
      
      {/* Onglet "Cancelled" pour les réservations annulées */}
      <Tab.Screen 
        name="Cancelled" 
        options={{
          tabBarLabel: 'Cancelled',
        }}>
        {() => <FilteredBookings clientId={clientId} status="cancelled" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default FilterTabs;
