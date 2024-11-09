// SeatScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Seat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { departureTime, arrivalTime, from, to, price, duration, date } = route.params;
  const [selectedFilter, setSelectedFilter] = useState('Booked');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleBack = () => {
    navigation.goBack();
  };

  const renderLowerDeckSeats = () => {
    const seatRows = [
      // Rangée 1
      { left: ['available', 'available'], right: ['empty', 'empty'] },
      { left: ['available', 'available'], right: ['grey', 'grey'] },
      // Rangée 4
      { left: ['available', 'booked'], right: ['booked', 'grey'] },
      // Rangée 5
      { left: ['available', 'available'], right: ['grey', 'grey'] },
    ];

    const handleSeatPress = (rowIndex, position, seatIndex, type) => {
      if (type === 'available') {
        const seatId = `${rowIndex}-${position}-${seatIndex}`;
        const newSelectedSeats = selectedSeats.includes(seatId)
          ? selectedSeats.filter(id => id !== seatId)
          : [...selectedSeats, seatId];
        setSelectedSeats(newSelectedSeats);
      }
    };

    return seatRows.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.seatRow}>
        <View style={styles.leftSeats}>
          {row.left.map((type, seatIndex) => {
            const seatId = `${rowIndex}-left-${seatIndex}`;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <TouchableOpacity
                key={`left-${seatIndex}`}
                onPress={() => handleSeatPress(rowIndex, 'left', seatIndex, type)}
                disabled={type !== 'available'}
              >
                <View 
                  style={[
                    styles.seat,
                    type === 'available' && styles.availableSeat,
                    type === 'booked' && styles.bookedSeat,
                    type === 'female' && styles.femaleSeat,
                    type === 'grey' && styles.greySeat,
                    isSelected && styles.selectedSeat
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.aisle} />
        <View style={styles.rightSeats}>
          {row.right.map((type, seatIndex) => {
            const seatId = `${rowIndex}-right-${seatIndex}`;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <TouchableOpacity
                key={`right-${seatIndex}`}
                onPress={() => handleSeatPress(rowIndex, 'right', seatIndex, type)}
                disabled={type !== 'available'}
              >
                <View 
                  style={[
                    styles.seat,
                    type === 'available' && styles.availableSeat,
                    type === 'booked' && styles.bookedSeat,
                    type === 'female' && styles.femaleSeat,
                    type === 'grey' && styles.greySeat,
                    isSelected && styles.selectedSeat
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    ));
  };

  const handleConfirm = () => {
    // Implementer la logique de confirmation ici
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
        {/* Departure */}
        <View style={styles.journeyPoint}>
          <Text style={styles.timeText}>{departureTime}</Text>
          <Text style={styles.locationText}>{from}</Text>
        </View>

        {/* Duration */}
        <View style={styles.durationContainer}>
          <Text style={styles.durationText}>{duration}hrs</Text>
          <View style={styles.durationLine}>
            <View style={styles.line} />
            <Icon name="bus-outline" size={16} color="#fff" style={styles.busIcon} />
            <View style={styles.line} />
          </View>
        </View>

        {/* Arrival */}
        <View style={styles.journeyPoint}>
          <Text style={styles.timeText}>{arrivalTime}</Text>
          <Text style={styles.locationText}>{to}</Text>
        </View>
      </View>

      {/* Date */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Seat Filters */}
        <View style={styles.filtersContainer}>
          <View style={styles.seatStatusFilters}>
            <TouchableOpacity 
              style={[styles.filterButton, selectedFilter === 'Booked' && styles.activeFilter]}
              onPress={() => setSelectedFilter('Booked')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Booked' && styles.activeFilterText]}>
                Booked
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterButton, selectedFilter === 'Available' && styles.activeFilter]}
              onPress={() => setSelectedFilter('Available')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Available' && styles.activeFilterText]}>
                Available
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterButton, selectedFilter === 'Female' && styles.activeFilter]}
              onPress={() => setSelectedFilter('Female')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Female' && styles.activeFilterText]}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Lower Deck Title */}
        <Text style={styles.deckTitle}>Lower Deck</Text>

        {/* Seats Container */}
        <View style={styles.seatsContainer}>
          {renderLowerDeckSeats()}
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
      </View>
    </SafeAreaView>
  );
};

export default Seat;