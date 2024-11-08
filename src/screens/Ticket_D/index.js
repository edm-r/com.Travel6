import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TicketDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
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
const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#002147',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  ticketCard: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  companySection: {
    marginBottom: 20,
  },
  companyHeader: {
    marginBottom: 6,
  },
  companyName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#002147',
  },
  busType: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  journeySection: {
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationInfo: {
    flex: 1,
  },
  busIconContainer: {
    paddingHorizontal: 20,
  },
  stationName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#002147',
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 13,
    color: '#666',
  },
  dashedDivider: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 20,
  },
  detailsGrid: {
    marginBottom: 20,
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  gridItem: {
    flex: 1,
  },
  gridLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  gridValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#002147',
  },
  ticketStatus: {
    textAlign: 'center',
    fontSize: 13,
    color: '#28a745',
    fontWeight: '500',
    marginBottom: 20,
  },
  barcodeContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  sectionContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  stopCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  stopIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f6f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stopInfo: {
    flex: 1,
  },
  stopTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#002147',
    marginBottom: 2,
  },
  stopTime: {
    fontSize: 13,
    color: '#666',
  },
  showButton: {
    paddingHorizontal: 8,
  },
  showButtonText: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '500',
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  chatButtonText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#002147',
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  starButton: {
    padding: 4,
    marginHorizontal: 4,
  },
});

export default TicketDetailsScreen;