// BusCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const BusCard = ({ company, busType, departureTime, arrivalTime, from, to, rating, seats, price, tag }) => (
  <View style={styles.card}>
    {/* Company Info */}
    <View style={styles.header}>
      <View style={styles.companyInfo}>
        <Image 
          source={require('./../../assets/images/Travel6_.png')} // Assurez-vous d'avoir cette image dans vos assets
          style={styles.logo}
        />
        <View style={styles.companyDetails}>
          <Text style={styles.companyName}>{company}</Text>
          <Text style={styles.busType} numberOfLines={1}>{busType}</Text>
        </View>
      </View>
      <View style={[
        styles.tag, 
        tag === "CHEAPEST" ? styles.cheapestTag : styles.fastestTag,
        tag === "CHEAPEST" ? styles.cheapestText : styles.fastestText
      ]}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    </View>

    {/* Journey Info */}
    <View style={styles.journey}>
      <View>
        <Text style={styles.time}>{departureTime}</Text>
        <Text style={styles.station}>{from}</Text>
      </View>
      <View style={styles.duration}>
        <Text style={styles.durationText}>4:05hrs</Text>
        <View style={styles.line} />
      </View>
      <View>
        <Text style={styles.time}>{arrivalTime}</Text>
        <Text style={styles.station}>{to}</Text>
      </View>
    </View>

    {/* Footer */}
    <View style={styles.footer}>
      <View style={styles.rating}>
        <Ionicons name="star" size={16} color="#FFB800" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={styles.seats}>
        <Ionicons name="person-outline" size={16} color="#666" />
        <Text style={styles.seatsText}>{seats}</Text>
      </View>
      <Text style={styles.price}>FCFA{price}</Text>
    </View>
  </View>
);

export default BusCard;