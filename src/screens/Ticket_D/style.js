import { StyleSheet } from "react-native";

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

  export default styles;