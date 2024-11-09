import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      textAlign: 'center',
    },
    backButton: {
      padding: 4,
    },
    headerTitle: {
      marginLeft: 12,
      fontSize: 16,
      fontWeight: '600',
      color: '#1a2b47',
    },
    content: {
      padding: 16,
    },
    section: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionLabel: {
      fontSize: 15,
      fontWeight: '500',
      color: '#1a2b47',
      marginBottom: 16,
    },
    boardingCard: {
      backgroundColor: '#fff',
    },
    boardingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    boardingPoint: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    boardingText: {
      marginLeft: 8,
      fontSize: 14,
      color: '#555',
    },
    boardingDivider: {
      height: 1,
      backgroundColor: '#e0e0e0',
      marginVertical: 8,
    },
    changeButton: {
      color: '#666',
      fontSize: 14,
      fontWeight: '500',
    },
    addPassengerButton: {
      padding: 4,
    },
    addPassengerText: {
      color: '#666',
      fontSize: 14,
      fontWeight: '500',
    },
    formGroup: {
      marginBottom: 16,
    },
    formRow: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    ageContainer: {
      flex: 1,
      marginRight: 16,
    },
    genderContainer: {
      flex: 2,
    },
    label: {
      fontSize: 14,
      color: '#666',
      marginBottom: 6,
    },
    input: {
      borderWidth: 1,
      borderColor: '#e0e0e0',
      borderRadius: 4,
      paddingHorizontal: 12,
      paddingVertical: 8,
      fontSize: 14,
      color: '#333',
    },
    genderOptions: {
      flexDirection: 'row',
    },
    genderOption: {
      marginRight: 24,
    },
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioOuter: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    radioOuterSelected: {
      borderColor: '#03314b',
    },
    radioInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#03314b',
    },
    genderText: {
      fontSize: 14,
      color: '#666',
    },
    genderTextSelected: {
      color: '#666',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      backgroundColor: '#042f40',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    checkboxLabel: {
      fontSize: 14,
      color: '#666',
      flex: 1,
    },
    footer: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 24,
    },
    totalContainer: {
      marginBottom: 16,
    },
    totalLabel: {
      fontSize: 14,
      color: '#666',
      marginBottom: 4,
    },
    totalAmount: {
      fontSize: 24,
      fontWeight: '600',
      color: '#1a2b47',
    },
    payButton: {
      backgroundColor: '#36a690',
      borderRadius: 4,
      paddingVertical: 14,
      alignItems: 'center',
    },
    payButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });
  export default styles