import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

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

export default BookingCard;
