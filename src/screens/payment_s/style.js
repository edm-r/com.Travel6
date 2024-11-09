import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
    },
    header: {
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    backButton: {
      padding: 4,
    },
    headerTitle: {
      marginLeft: 12,
      fontSize: 18,
      fontWeight: '600',
      color: '#1a2b47',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    iconOuterCircle: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: 'rgba(40, 167, 69, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
    iconInnerCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#28a745',
      justifyContent: 'center',
      alignItems: 'center',
    },
    successTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#1a2b47',
      marginBottom: 8,
    },
    successMessage: {
      fontSize: 14,
      color: '#666666',
      textAlign: 'center',
      lineHeight: 20,
    },
    footer: {
      padding: 16,
      paddingBottom: 32,
    },
    viewTicketButton: {
      backgroundColor: '#1a2b47',
      borderRadius: 8,
      paddingVertical: 16,
      alignItems: 'center',
    },
    viewTicketText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500',
    },
  });

  export default styles