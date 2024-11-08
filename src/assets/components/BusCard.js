// BusCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BusCard = ({ company, busType, departureTime, arrivalTime, from, to, rating, seats, price, tag }) => (
  <TouchableOpacity style={styles.card}>
    {/* Company Info */}
    <View style={styles.header}>
      <View style={styles.companyInfo}>
        <Image 
          source={require('../../assets/images/Travel6_.png')} // Assurez-vous d'avoir cette image dans vos assets
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
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  companyInfo: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 12,
  },
  companyDetails: {
    flex: 1,
    marginLeft: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0B2C3D',
  },
  busType: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  cheapestTag: {
    backgroundColor: '#E8F5E9',
  },
  fastestTag: {
    backgroundColor: '#E3F2FD',
  },
  cheapestText: {
    color: '#2E7D32',
  },
  fastestText: {
    color: '#1565C0',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  journey: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0B2C3D',
  },
  station: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  duration: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 12,
  },
  durationText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  line: {
    height: 1,
    backgroundColor: '#EFEFEF',
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  seats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatsText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B2C3D',
  },
});

export default BusCard;