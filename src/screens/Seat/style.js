import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002147',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    backButton: {
      padding: 4,
    },
    headerTitle: {
      marginLeft: 16,
      fontSize: 18,
      fontWeight: '600',
      color: '#fff',
    },
    journeyInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    journeyPoint: {
      flex: 1,
    },
    timeText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
    locationText: {
      fontSize: 14,
      color: '#aaa',
      marginTop: 2,
    },
    durationContainer: {
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    durationText: {
      fontSize: 12,
      color: '#fff',
      marginBottom: 4,
    },
    durationLine: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 80,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#fff',
    },
    busIcon: {
      marginHorizontal: 4,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 8,
    },
    ratingText: {
      color: '#fff',
      marginRight: 4,
    },
    dateContainer: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    dateText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    },
    mainContent: {
      flex: 1,
      backgroundColor: '#f5f6f7',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 16,
    },
    filtersContainer: {
      paddingHorizontal: 16,
      marginBottom: 24,
    },
    seatStatusFilters: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    filterButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#fff',
      borderRadius: 20,
      marginRight: 8,
    },
    priceFilters: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    allPriceText: {
      color: '#666',
      marginRight: 12,
    },
    priceButton: {
      paddingHorizontal: 16,
      paddingVertical: 6,
      backgroundColor: '#fff',
      borderRadius: 4,
      marginRight: 8,
    },
    priceButtonActive: {
      backgroundColor: '#002147',
    },
    priceText: {
      color: '#666',
    },
    priceActiveText: {
      color: '#fff',
    },
    deckTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: '#002147',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    seatsContainer: {
      paddingHorizontal: 16,
    },
    seatRow: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    leftSeats: {
      flexDirection: 'row',
    },
    rightSeats: {
      flexDirection: 'row',
    },
    aisle: {
      width: 20,
    },
    seat: {
      width: 44,
      height: 66,
      borderWidth: 1,
      borderRadius: 4,
      margin: 2,
    },
    availableSeat: {
      borderColor: '#3f9d45',
    },
    bookedSeat: {
      backgroundColor: '#002147',
      borderColor: '#002147',
    },
    femaleSeat: {
      borderColor: '#ff69b4',
    },
    occupiedSeat: {
      backgroundColor: '#f5f5f5',
      borderColor: '#ddd',
    },
    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      marginTop: 'auto',
    },
    seatTypeText: {
      fontSize: 13,
      color: '#666',
    },
    seatNumberText: {
      fontSize: 15,
      fontWeight: '600',
      color: '#002147',
    },
    confirmButton: {
      backgroundColor: '#3f9d45',
      paddingHorizontal: 32,
      paddingVertical: 12,
      borderRadius: 4,
    },
    confirmText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });

  export default styles;