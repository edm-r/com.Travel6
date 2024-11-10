import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar, 
  ScrollView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BusCard from '../../assets/components/BusCard';
import styles from './style';
import { getClientById, getAllVoyages } from '../api';

const Home = () => {
  const [clientData, setClientData] = useState(null); // État pour stocker les données du client
  const [voyages, setVoyages] = useState([]); // État pour stocker les voyages
  const [from, setFrom] = useState(''); // État pour le champ "from"
  const [to, setTo] = useState(''); // État pour le champ "to"
  const [date, setDate] = useState(''); // État pour le champ "date"
  const navigation = useNavigation();
  const clientId = 1; // ID du client, à rendre dynamique si nécessaire

  // Fonction pour récupérer les données du client
  const fetchClientData = async () => {
    try {
      const data = await getClientById(clientId);
      if (data && data.length > 0) {
        setClientData(data[0]);
      } else {
        console.warn('Aucune donnée trouvée pour le client');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données du client', error);
    }
  };

  // Fonction pour récupérer tous les voyages
  const fetchVoyages = async () => {
    try {
      const data = await getAllVoyages();
      if (Array.isArray(data)) {
        setVoyages(data);
      } else {
        console.warn('Les données des voyages sont invalides');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des voyages', error);
    }
  };

  // Charger les données du client et les voyages au montage du composant
  useEffect(() => {
    fetchClientData();
    fetchVoyages();
  }, []);

  // Fonction de recherche de voyages
  const searchVoyages = async () => {
    try {
      const query = new URLSearchParams();
      if (date) query.append('date', date);
      if (to) query.append('destination', to);

      const response = await fetch(`http://votre-backend-url/voyages/search?${query.toString()}`);
      const data = await response.json();
      setVoyages(data); // Met à jour l'état avec les voyages trouvés
    } catch (error) {
      console.error('Erreur lors de la recherche des voyages:', error);
    }
  };

  // Formatage de l'heure en AM/PM
  const formatTime = (time) => {
    const date = new Date(time); 
    date.setUTCHours(date.getUTCHours() + 1); // Ajouter une heure pour GMT+1
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    const suffix = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${hours}:${formattedMinutes} ${suffix}`;
  };

  // Formatage de la date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  // Calcul dynamique de la durée entre deux dates complètes de départ et d'arrivée
  const calculateDuration = (departureTime, arrivalTime) => {
    const depDate = new Date(departureTime); 
    const arrDate = new Date(arrivalTime); 
    let durationMs = arrDate - depDate;

    if (durationMs < 0) {
      durationMs += 24 * 60 * 60 * 1000; 
    }

    const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMinutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${durationHours}:${String(durationMinutes).padStart(2, '0')}`;
  };

  const handleBusCardPress = (busInfo) => {
    navigation.navigate('Seat', {
      departureTime: busInfo.departureTime,
      arrivalTime: busInfo.arrivalTime,
      from: busInfo.from,
      to: busInfo.to,
      price: busInfo.price,
      duration: calculateDuration(busInfo.departureTime, busInfo.arrivalTime),
      date: formatDate(busInfo.departureDate),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>
              {clientData ? `${clientData.prenom_client} ${clientData.nom_client}` : 'Chargement...'}
            </Text>
            <Text style={styles.headerSubtitle}>Book your bus!</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Card */}
        <View style={styles.searchCard}>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Ionicons name="bus-outline" size={24} color="#0B2C3D" />
              <Ionicons name="walk-outline" size={20} color="#0B2C3D" style={styles.walkIcon} />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder="from" 
              placeholderTextColor="#999" 
              value={from} 
              onChangeText={setFrom} 
            />
          </View>

          <TouchableOpacity style={styles.swapButton}>
            <Ionicons name="swap-vertical" size={24} color="#0B2C3D" />
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Ionicons name="bus-outline" size={24} color="#0B2C3D" />
              <Ionicons name="walk-outline" size={20} color="#0B2C3D" style={styles.walkIcon} />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder="to" 
              placeholderTextColor="#999" 
              value={to} 
              onChangeText={setTo} 
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Ionicons name="calendar-outline" size={24} color="#0B2C3D" />
            </View>
            <TextInput 
              style={styles.input} 
              placeholder="date" 
              placeholderTextColor="#999" 
              value={date} 
              onChangeText={setDate} 
            />
          </View>

          <TouchableOpacity style={styles.searchButton} onPress={searchVoyages}>
            <Text style={styles.searchButtonText}>Search Buses</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Results Section */}
      <ScrollView style={styles.resultsSection}>
        <View style={styles.resultsContainer}>
          {voyages.length === 0 && <Text>Aucun voyage disponible pour le moment.</Text>}
          {voyages.map((voyage) => (
            <TouchableOpacity 
              key={voyage.id_voyage}
              onPress={() => handleBusCardPress({
                departureDate: formatDate(voyage.date_depart),
                departureTime: formatTime(voyage.heure_depart),
                arrivalTime: formatTime(voyage.heure_arrive),
                from: voyage.ville_depart,
                to: voyage.ville_arrivee,
                price: voyage.prix_classe,
                duration: calculateDuration(voyage.heure_depart, voyage.heure_arrive),
              })}
            >
              <BusCard
                company="Travel6"
                busType={voyage.nom_classe}
                departureDate={formatDate(voyage.date_depart)}
                departureTime={formatTime(voyage.heure_depart)}
                arrivalTime={formatTime(voyage.heure_arrive)}
                from={voyage.ville_depart}
                to={voyage.ville_arrivee}
                rating="4.4" 
                seats={voyage.nombre_de_places}
                price={voyage.prix_classe}
                tag={voyage.nom_classe} 
                duration={calculateDuration(voyage.heure_depart, voyage.heure_arrive)} 
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
