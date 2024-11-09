import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FilterTabs from '../../assets/components/FilterTabs';
import styles from './style';
// Écran principal
const Ticket = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bookings</Text>
      <FilterTabs />
    </View>
  );
};

export default Ticket;