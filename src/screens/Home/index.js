// HomeScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BusCard from '../../assets/components/BusCard';

const Home = () => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03314B',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#5BA3D4',
    marginTop: 4,
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    margin: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    height: 50,
  },
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  walkIcon: {
    marginLeft: -8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#0B2C3D',
  },
  swapButton: {
    position: 'absolute',
    right: 0,
    top: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    zIndex: 1,
  },
  searchButton: {
    backgroundColor: '#0B2C3D',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resultsSection: {
    flex: 1,
    backgroundColor: '#03314B',
  },
  resultsContainer: {
    padding: 16,
  },
});

export default Home;