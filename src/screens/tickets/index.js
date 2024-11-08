import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FilterTabs from '../../assets/components/FilterTabs';

// Écran principal
const Ticket = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bookings</Text>
      <FilterTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
});

export default Ticket;