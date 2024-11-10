import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabContent: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 16,
    },
    tabBar: {
      backgroundColor: '#EFEFEF',
      elevation: 0,
      shadowOpacity: 0,
      borderRadius: 25,
      marginHorizontal: 16,
      marginTop: 16,
      height: 45,
      padding: 4,
    },
    tabBarItem: {
      padding: 0,
      margin: 0,
    },
    tabItem: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    activeTabItem: {
      backgroundColor: '#03314b',
    },
    tabText: {
      fontSize: 14,
      textAlign: 'center',
    },
    activeTabText: {
      color: '#FFFFFF',
    },
    inactiveTabText: {
      color: '#666666',
    },

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
    dates: {
      fontSize: 14,
      fontWeight: '600',
      color: '#0B2C3D',
    },
    time: {
      fontSize: 11,
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

export default styles;  