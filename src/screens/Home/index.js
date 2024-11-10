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
  const [clientData, setClientData] = useState(null);
  const [voyages, setVoyages] = useState([]); // All available voyages
  const [filteredVoyages, setFilteredVoyages] = useState([]); // Filtered voyages based on search
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const navigation = useNavigation();
  const clientId = 1;

  // Fetch client data
  const fetchClientData = async () => {
    try {
      const data = await getClientById(clientId);
      if (data && data.length > 0) {
        setClientData(data[0]);
      }
    } catch (error) {
      console.error('Error fetching client data:', error);
    }
  };

  // Fetch all voyages
  const fetchVoyages = async () => {
    try {
      const data = await getAllVoyages();
      if (Array.isArray(data)) {
        setVoyages(data);
        setFilteredVoyages(data); // Set initial filtered voyages to all voyages
      }
    } catch (error) {
      console.error('Error fetching voyages:', error);
    }
  };

  useEffect(() => {
    fetchClientData();
    fetchVoyages();
  }, []);

  // Search function to filter voyages based on user input
const searchVoyages = () => {
  // Trim the input values to remove any leading or trailing spaces
  const trimmedFrom = from.trim();
  const trimmedTo = to.trim();
  const trimmedDate = date.trim();

  const filtered = voyages.filter((voyage) => {
    const isFromMatch = voyage.ville_depart.toLowerCase().includes(trimmedFrom.toLowerCase());
    const isToMatch = voyage.ville_arrivee.toLowerCase().includes(trimmedTo.toLowerCase());
    
    // Check if date matches, only filter by date if it is provided
    const isDateMatch = trimmedDate ? (voyage.heure_depart && voyage.heure_depart.includes(trimmedDate)) : true;

    return isFromMatch && isToMatch && isDateMatch;
  });
  
  setFilteredVoyages(filtered);
};

  

  // Formatters for time and date
  const formatTime = (time) => {
    const date = new Date(time); 
    date.setUTCHours(date.getUTCHours() + 1);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    const suffix = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${hours}:${formattedMinutes} ${suffix}`;
  };

  const formatDate = (date) => {
    if (!date) {  // Vérifie si la date est définie et non vide
      return 'Invalid date'; // Retourne une valeur par défaut si la date est vide ou indéfinie
    }
  
    // Ajouter un T entre la date et l'heure pour garantir que le format soit valide
    const formattedDate = date.replace(' ', 'T');
    const parsedDate = new Date(formattedDate); // Essaie de créer un objet Date à partir de la chaîne modifiée
  
    if (isNaN(parsedDate)) {
      return 'Invalid date'; // Si la date est invalide, retourne 'Invalid date'
    }
  
    // Formatage de la date au format ISO (AAAA-MM-JJ)
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0, donc on ajoute 1
    const day = String(parsedDate.getDate()).padStart(2, '0'); // Assure que le jour a toujours 2 chiffres
  
    return `${year}-${month}-${day}`; // Retourne la date sous le format AAAA-MM-JJ
  };
  


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
    if (!busInfo.departureDate) {
      console.error('Departure date is missing:', busInfo);  // Vous pouvez également afficher des informations dans la console pour aider au debugging
      return;
    }
  
    navigation.navigate('Seat', {
      departureDate: busInfo.heure_depart,
      departureTime: busInfo.departureTime,
      arrivalTime: busInfo.arrivalTime,
      from: busInfo.from,
      to: busInfo.to,
      price: busInfo.price,
      duration: calculateDuration(busInfo.departureTime, busInfo.arrivalTime),
      date: formatDate(busInfo.heure_depart),
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
              {clientData ? `${clientData.prenom_client} ${clientData.nom_client}` : 'Loading...'}
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
          {filteredVoyages.length === 0 && <Text>Pas de voyage disponible pour le moment.</Text>}
          {filteredVoyages.map((voyage) => (
            <TouchableOpacity 
              key={voyage.id_voyage}
              onPress={() => handleBusCardPress({
                departureDate: formatDate(voyage.heure_depart),
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
                departureDate={formatDate(voyage.heure_depart)}
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

