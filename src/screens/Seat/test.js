import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Button, SafeAreaView } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

const SeatReservation = ({ route }) => {
  const { departureTime, arrivalTime, from, to, price, duration, date, id_voyage } = route.params;

  const [seatsData, setSeatsData] = useState({
    totalSeats: 0,
    freeSeats: 0,
    occupiedSeats: [],
    seatsPerRow: 5,
  });
  const [selectedSeats, setSelectedSeats] = useState([]); // Liste des sièges sélectionnés
  const [seatPrice] = useState(price); // Prix par siège récupéré depuis les paramètres

  useEffect(() => {
    const fetchSeatsData = async () => {
      try {
        const response = await axios.get(`http://192.168.1.176:3000/api/voyages/${id_voyage}/seats`);
        
        const data = response.data;
        if (data) {
          const occupiedSeats = data.places_occupees
            ? data.places_occupees.split(',').map(place => parseInt(place, 10)) // Convertir les id_place en nombre
            : [];

          setSeatsData({
            totalSeats: data.total_places || 0,
            freeSeats: data.places_libres || 0,
            occupiedSeats: occupiedSeats,
            seatsPerRow: 5,
          });
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données des sièges:", error);
      }
    };

    fetchSeatsData();
  }, [id_voyage]);

  // Calcul du nombre de rangées et des sièges par rangée
  const getRowsAndSeats = () => {
    const totalSeats = seatsData.totalSeats;
    const seatsPerRow = seatsData.seatsPerRow;

    const rows = Math.ceil(totalSeats / seatsPerRow);
    const seatsInLastRow = totalSeats % seatsPerRow || seatsPerRow;

    return { rows, seatsPerRow, seatsInLastRow };
  };

  // Calcul du prix total en fonction des sièges sélectionnés
  const totalPrice = selectedSeats.length * seatPrice;

  // Fonction pour afficher les sièges sous forme de petits carrés avec l'agencement désiré
  const renderSeats = () => {
    const { rows, seatsPerRow, seatsInLastRow } = getRowsAndSeats();
    const seats = [];

    for (let row = 1; row <= rows; row++) {
      const rowSeats = [];
      const currentRowSeats = row === rows ? seatsInLastRow : seatsPerRow;  // Dernière rangée avec sièges restants

      for (let col = 1; col <= currentRowSeats; col++) {
        const seatId = (row - 1) * seatsPerRow + col;
        const isOccupied = seatsData.occupiedSeats && seatsData.occupiedSeats.includes(seatId);
        const isSelected = selectedSeats.includes(seatId);

        rowSeats.push(
          <TouchableOpacity
            key={`seat-${row}-${col}`}
            style={[styles.seat, isOccupied ? styles.occupiedSeat : isSelected ? styles.selectedSeat : styles.freeSeat]}
            onPress={() => {
              if (isOccupied) {
                Alert.alert("Siège déjà occupé", `Le siège ${seatId} est déjà réservé par un autre passager.`);
              } else {
                setSelectedSeats(prevSeats => {
                  const newSeats = prevSeats.includes(seatId) 
                    ? prevSeats.filter(seat => seat !== seatId)
                    : [...prevSeats, seatId];  
                  return newSeats;
                });
              }
            }}
          >
            <Text style={styles.seatText}>{seatId}</Text>
          </TouchableOpacity>
        );
      }

      seats.push(
        <View key={`row-${row}`} style={styles.row}>
          {rowSeats.slice(0, 3)} 
          <View style={styles.middleSpace}></View>
          {rowSeats.slice(3)} 
        </View>
      );
    }

    return seats;
  };

  const handleConfirm = () => {
    if (selectedSeats.length > 0) {
      alert(`Sièges réservés : ${selectedSeats.join(', ')}`);
      console.log("Sièges confirmés:", selectedSeats);
    } else {
      Alert.alert("Aucune place sélectionnée", "Veuillez sélectionner au moins un siège avant de confirmer.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => { /* Handle back */ }}>
          <Icon name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Réservation de siège</Text>
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
            <Icon name="bus-outline" size={18} color="#fff" style={styles.busIcon} />
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
        <Text style={styles.dateText}>{date}</Text>
      </View>

      {/* Seat Reservation Section */}
      <ScrollView contentContainerStyle={styles.seatContainer}>
        {renderSeats()}
      </ScrollView>

      {/* Affichage du prix total */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Prix total: {totalPrice} €</Text>
      </View>

      {/* Bouton de confirmation */}
      <View style={styles.confirmButtonContainer}>
        <Button title="Confirmer la réservation" onPress={handleConfirm} color="#2196F3" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Couleur de fond plus douce
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#2196F3',
    elevation: 4, // Ombre pour le header
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  journeyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#2196F3',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  journeyPoint: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  locationText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  durationContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  durationText: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 4,
  },
  durationLine: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  busIcon: {
    marginHorizontal: 4,
  },
  dateContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#4CAF50',
    marginBottom: 20,
    borderRadius: 8,
  },
  dateText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  seatContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  seat: {
    width: 35,
    height: 35,
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  freeSeat: {
    backgroundColor: '#4CAF50', // Vert pour les sièges libres
  },
  occupiedSeat: {
    backgroundColor: '#F44336', // Rouge pour les sièges occupés
  },
  selectedSeat: {
    backgroundColor: '#2196F3', // Bleu pour les sièges sélectionnés
  },
  seatText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  middleSpace: {
    width: 100, // Largeur de l'espace entre les deux groupes de sièges
  },
  priceContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  confirmButtonContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default SeatReservation;
