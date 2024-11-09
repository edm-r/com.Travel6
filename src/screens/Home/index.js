// HomeScreen.js
import React from 'react';
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

const Home = () => {
  const navigation = useNavigation();

  const handleBusCardPress = (busInfo) => {
    navigation.navigate('Seat', {
      departureTime: busInfo.departureTime,
      arrivalTime: busInfo.arrivalTime,
      from: busInfo.from,
      to: busInfo.to,
      price: busInfo.price,
      duration: calculateDuration(busInfo.departureTime, busInfo.arrivalTime),
      date: "November 27" // Vous pouvez le rendre dynamique plus tard
    });
  };

  const calculateDuration = (departure, arrival) => {
    // Convertir les heures en format 24h pour faciliter le calcul
    const convertTo24Hour = (time) => {
      const [hour, minute] = time.match(/\d+/g).map(Number);
      if (time.includes('PM') && hour !== 12) return [hour + 12, minute];
      if (time.includes('AM') && hour === 12) return [0, minute];
      return [hour, minute];
    };

    const [depHour, depMinute] = convertTo24Hour(departure);
    const [arrHour, arrMinute] = convertTo24Hour(arrival);
    
    let durationHours = arrHour - depHour;
    let durationMinutes = arrMinute - depMinute;
    
    if (durationMinutes < 0) {
      durationHours -= 1;
      durationMinutes += 60;
    }

    if (durationHours < 0) {
      durationHours += 24;
    }
    
    return `${durationHours}:${String(durationMinutes).padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.headerSection}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Edmond</Text>
            <Text style={styles.headerSubtitle}>Book your bus!</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Card */}
        <View style={styles.searchCard}>
          {/* From Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Ionicons name="bus-outline" size={24} color="#0B2C3D" />
              <Ionicons name="walk-outline" size={20} color="#0B2C3D" style={styles.walkIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="from"
              placeholderTextColor="#999"
            />
          </View>

          {/* Swap Button */}
          <TouchableOpacity style={styles.swapButton}>
            <Ionicons name="swap-vertical" size={24} color="#0B2C3D" />
          </TouchableOpacity>

          {/* To Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Ionicons name="bus-outline" size={24} color="#0B2C3D" />
              <Ionicons name="walk-outline" size={20} color="#0B2C3D" style={styles.walkIcon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="to"
              placeholderTextColor="#999"
            />
          </View>

          {/* Date Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Ionicons name="calendar-outline" size={24} color="#0B2C3D" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="date"
              placeholderTextColor="#999"
            />
          </View>

          {/* Search Button */}
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search Buses</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Results Section */}
      <ScrollView style={styles.resultsSection}>
        <View style={styles.resultsContainer}>
          <TouchableOpacity 
            onPress={() => handleBusCardPress({
              departureTime: "6:50AM",
              arrivalTime: "12:15PM",
              from: "Baffousam",
              to: "Douala",
              price: "6000"
            })}
          >
            <BusCard
              company="Travel6"
              busType="Volvo Multi Axle Semi Sleeper (2+2)"
              departureTime="6:50AM"
              arrivalTime="12:15PM"
              from="Baffousam"
              to="Douala"
              rating="4.4"
              seats="34"
              price="6000"
              tag="CHEAPEST"
            />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => handleBusCardPress({
              departureTime: "5:50AM",
              arrivalTime: "10:15AM",
              from: "Yaounde",
              to: "Douala",
              price: "10000"
            })}
          >
            <BusCard
              company="Travel6"
              busType="Mercedes Benz Multi-Axle A/C Sleeper (2+1)"
              departureTime="5:50AM"
              arrivalTime="10:15AM"
              from="Yaounde"
              to="Douala"
              rating="4.4"
              seats="4"
              price="10000"
              tag="FASTEST"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;