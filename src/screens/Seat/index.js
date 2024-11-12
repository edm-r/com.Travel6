import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getSeats } from '../api';  // Assurez-vous que cette fonction est correctement importée
import styles from './style';

const Seat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { departureTime, arrivalTime, from, to, price, duration, date, id_voyage } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);  // Sièges sélectionnés
  const [seats, setSeats] = useState([]);  // Liste des sièges
  const [totalSeats, setTotalSeats] = useState(0);  // Total des sièges
  const [bookedSeats, setBookedSeats] = useState(0);  // Nombre de sièges réservés
  const [availableSeats, setAvailableSeats] = useState(0);  // Nombre de sièges disponibles

  // Récupération des sièges depuis l'API
  useEffect(() => {
    const fetchSeats = async () => {
      try {
        console.log('Fetching seats for voyage ID:', id_voyage);
        const seatsData = await getSeats(id_voyage);  // Appeler l'API qui renvoie aussi le nombre total de places et réservées
        
        const { seats, totalSeats, bookedSeats, availableSeats } = seatsData;

        setSeats(seats);  // Met à jour la liste des places
        setTotalSeats(totalSeats);  // Stocke le nombre total de places
        setBookedSeats(bookedSeats);  // Stocke le nombre de réservations
        setAvailableSeats(availableSeats);  // Stocke le nombre de places disponibles

      } catch (error) {
        console.error("Erreur lors de la récupération des places:", error);
      }
    };

    if (id_voyage) {
      fetchSeats();
    } else {
      console.error('ID de voyage manquant');
    }
  }, [id_voyage]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSeatPress = (seatId, type) => {
    if (type === 'available') {
      const newSelectedSeats = selectedSeats.includes(seatId)
        ? selectedSeats.filter(id => id !== seatId)
        : [...selectedSeats, seatId];
      setSelectedSeats(newSelectedSeats);
    }
  };

  const renderSeats = () => {
    const rows = [];
    let leftSeats = [];
    let rightSeats = [];
    
    // Affichage des sièges en fonction de totalSeats
    for (let i = 0; i < totalSeats; i++) {
      const side = i % 5 < 3 ? 'leftSeats' : 'rightSeats';  // 3 sièges à gauche et 2 à droite
      const status = seats[i] ? seats[i].place_status : 'available'; // Assume 'available' if no status in seats data
      const seat = {
        seatId: i + 1, // Les sièges commencent à 1
        type: status,
        cote: side,
        numero_place: i + 1
      };
  
      if (side === 'leftSeats') {
        leftSeats.push(seat);
      } else {
        rightSeats.push(seat);
      }

      // Lorsque 3 sièges à gauche et 2 à droite sont remplis, on crée une nouvelle rangée
      if (leftSeats.length === 3 && rightSeats.length === 2) {
        rows.push({ left: leftSeats, right: rightSeats });
        leftSeats = [];  // Reset for next row
        rightSeats = [];  // Reset for next row
      }
    }
    
    // S'il y a des sièges restants non complets (moins de 3 à gauche ou moins de 2 à droite), les ajouter à la dernière rangée
    if (leftSeats.length > 0 || rightSeats.length > 0) {
      rows.push({ left: leftSeats, right: rightSeats });
    }

    return rows.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.seatRow}>
        {/* Affichage des sièges à gauche */}
        <View style={styles.leftSeats}>
          {row.left.map((seat) => {
            const { seatId, type } = seat;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <TouchableOpacity
                key={`left-${seatId}`}
                onPress={() => handleSeatPress(seatId, type)}
                disabled={type === 'booked'}
              >
                <View 
                  style={[ 
                    styles.seat,
                    type === 'available' && styles.availableSeat,
                    type === 'booked' && styles.bookedSeat,
                    type === 'female' && styles.femaleSeat,
                    type === 'grey' && styles.greySeat,
                    isSelected && styles.selectedSeat
                  ]} />
              </TouchableOpacity>
            );
          })}
        </View>
  
        <View style={styles.aisle} />
  
        {/* Affichage des sièges à droite */}
        <View style={styles.rightSeats}>
          {row.right.map((seat) => {
            const { seatId, type } = seat;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <TouchableOpacity
                key={`right-${seatId}`}
                onPress={() => handleSeatPress(seatId, type)}
                disabled={type === 'booked'}
              >
                <View 
                  style={[ 
                    styles.seat,
                    type === 'available' && styles.availableSeat,
                    type === 'booked' && styles.bookedSeat,
                    type === 'female' && styles.femaleSeat,
                    type === 'grey' && styles.greySeat,
                    isSelected && styles.selectedSeat
                  ]} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    ));
  };

  const handleConfirm = () => {
    navigation.navigate("Passenger");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Journey Info */}
      <View style={styles.journeyInfo}>
        <View style={styles.journeyPoint}>
          <Text style={styles.timeText}>{departureTime}</Text>
          <Text style={styles.locationText}>{from}</Text>
        </View>
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>{duration}hrs</Text>
          <View style={styles.durationLine}>
            <View style={styles.line} />
            <Icon name="bus-outline" size={16} color="#fff" style={styles.busIcon} />
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.journeyPoint}>
          <Text style={styles.timeText}>{arrivalTime}</Text>
          <Text style={styles.locationText}>{to}</Text>
        </View>
      </View>

      {/* Date */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>d
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        {/* Lower Deck Title */}
        <Text style={styles.deckTitle}>Lower Deck</Text>

        {/* Seats Container */}
        <View style={styles.seatsContainer}>
          {renderSeats()}
        </View>

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.seatTypeText}>Sleeper, Seater</Text>
            <Text style={styles.seatNumberText}>
              FCFA{price} × {selectedSeats.length} = FCFA{parseInt(price) * selectedSeats.length}
            </Text>
          </View>
          <TouchableOpacity 
            style={[styles.confirmButton, selectedSeats.length === 0 && styles.disabledButton]}
            onPress={handleConfirm}
            disabled={selectedSeats.length === 0}
          >
            <Text style={styles.confirmText}>
              {selectedSeats.length === 0 ? 'Select Seats' : 'Confirm'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Seat;
