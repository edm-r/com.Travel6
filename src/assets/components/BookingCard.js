import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BookingCard = ({ date, persons, price, from, to }) => (
  <View style={styles.bookingCard}>
    <View style={styles.routeContainer}>
      <View>
        <Text style={styles.cityCode}>{from}</Text>
        <Text style={styles.cityName}>Yaounde</Text>
      </View>
      <View style={styles.dotLine} />
      <View>
        <Text style={styles.cityCode}>{to}</Text>
        <Text style={styles.cityName}>Douala</Text>
      </View>
    </View>
    <View style={styles.detailsContainer}>
      <View style={styles.detailItem}>
        <Icon name="calendar-outline" size={16} color="#666" style={styles.icon} />
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.detailItem}>
        <Icon name="people-outline" size={16} color="#666" style={styles.icon} />
        <Text style={styles.persons}>{persons} Persons</Text>
      </View>
      <Text style={styles.price}>FCFA{price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  bookingCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  routeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cityCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0B2C3D',
  },
  cityName: {
    fontSize: 12,
    color: '#666',
  },
  dotLine: {
    flex: 1,
    height: 1,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  persons: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0B2C3D',
  },
});

export default BookingCard;
