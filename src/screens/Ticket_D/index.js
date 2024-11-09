import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const Ticket_D = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Tabs')}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ticket Details</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Ticket Card */}
        <View style={styles.ticketCard}>
          {/* Bus Company Info */}
          <View style={styles.companySection}>
            <View style={styles.companyHeader}>
              <View style={styles.logoContainer}>
                <Image 
                  source={require('../../assets/images/Travel6_.png')}
                  style={styles.logo}
                />
                <Text style={styles.companyName}>Travel6</Text>
              </View>
            </View>
            <Text style={styles.busType}>Mercedes Benz Multi Axle A/C Sleeper (2+1)</Text>
          </View>

          {/* Journey Details */}
          <View style={styles.journeySection}>
            <View style={styles.locationContainer}>
              <View style={styles.locationInfo}>
                <Text style={styles.stationName}>Yaounde</Text>
                <Text style={styles.dateTime}>Oct 10, 5:50am</Text>
              </View>
              <View style={styles.busIconContainer}>
                <Icon name="bus-outline" size={20} color="#1a2b47" />
              </View>
              <View style={styles.locationInfo}>
                <Text style={styles.stationName}>Douala</Text>
                <Text style={styles.dateTime}>Oct 10, 11:15am</Text>
              </View>
            </View>
          </View>

          <View style={styles.dashedDivider} />

          {/* Ticket Details Grid */}
          <View style={styles.detailsGrid}>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Passengers</Text>
                <Text style={styles.gridValue}>1 Adults</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Seat No.</Text>
                <Text style={styles.gridValue}>S11-W10</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Ticket No.</Text>
                <Text style={styles.gridValue}>42WL494</Text>
              </View>
            </View>

            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Passenger Name</Text>
                <Text style={styles.gridValue}>Edmond Yopa</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Ticket Fare</Text>
                <Text style={styles.gridValue}>FCFA10000</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Rest Stops</Text>
                <Text style={styles.gridValue}>1 Stop</Text>
              </View>
            </View>
          </View>

          <Text style={styles.ticketStatus}>Ticket Status - CONFIRMED</Text>

          {/* Barcode */}
          <View style={styles.barcodeContainer}>
            <Icon name="barcode-outline" size={80} color="#1a2b47" />
          </View>
        </View>

               {/* Help Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Help</Text>
          <TouchableOpacity style={styles.chatButton}>
            <Icon name="chatbubbles-outline" size={20} color="#1a2b47" />
            <Text style={styles.chatButtonText}>Chat with us</Text>
          </TouchableOpacity>
        </View>

        {/* Rating Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Rate this bus</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} style={styles.starButton}>
                <Icon name="star-outline" size={26} color="#fff" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Ticket_D;