import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f6f7',
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
      flex: 1,
      marginLeft: 12,
      fontSize: 16,
      fontWeight: '600',
      color: '#1a2b47',
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTime: {
      marginLeft: 4,
      fontSize: 14,
      color: '#666',
    },
    content: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: '500',
      color: '#1a2b47',
      marginBottom: 12,
    },
    detailsCard: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    subSectionTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: '#1a2b47',
      marginBottom: 8,
    },
    itemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    lastItemInSection: {
      marginBottom: 16,
    },
    itemText: {
      fontSize: 14,
      color: '#666',
    },
    itemPrice: {
      fontSize: 14,
      color: '#1a2b47',
      fontWeight: '500',
    },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: '#eee',
      marginTop: 4,
    },
    totalText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#1a2b47',
    },
    totalAmount: {
      fontSize: 16,
      fontWeight: '600',
      color: '#1a2b47',
    },
    promoInputContainer: {
      marginBottom: 24,
    },
    promoInput: {
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 14,
      color: '#1a2b47',
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    paymentMethodsSection: {
      marginBottom: 24,
    },
    paymentOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 8,
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    paymentOptionLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paymentOptionText: {
      fontSize: 14,
      color: '#1a2b47',
    },
    cardIconsContainer: {
      flexDirection: 'row',
      marginLeft: 12,
    },
    cardIcon: {
      marginRight: 8,
    },
    upiSection: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      elevation: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    upiHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    upiContent: {
      marginTop: 4,
    },
    upiInput: {
      borderWidth: 1,
      borderColor: '#dc3545',
      borderRadius: 4,
      paddingHorizontal: 12,
      paddingVertical: 8,
      fontSize: 14,
      marginBottom: 8,
    },
    errorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    errorText: {
      marginLeft: 6,
      fontSize: 12,
      color: '#dc3545',
    },
    payButton: {
      backgroundColor: '#3f9d45',
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
      marginBottom: 24,
    },
    payButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
    },
  });

  export default styles;