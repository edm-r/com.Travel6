import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#1a2b47" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={styles.timeContainer}>
          <Icon name="time-outline" size={16} color="#666" />
          <Text style={styles.headerTime}>6:29</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Payment Details Section */}
        <Text style={styles.sectionTitle}>Payment details:</Text>

        <View style={styles.detailsCard}>
          {/* Tickets */}
          <Text style={styles.subSectionTitle}>Tickets</Text>
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>YDE --- DLA</Text>
          </View>
          <View style={[styles.itemRow, styles.lastItemInSection]}>
            <Text style={styles.itemText}>1 person</Text>
          </View>
          {/* Total */}
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>FCFA10000</Text>
          </View>
        </View>

        {/* Promo Code */}
        <View style={styles.promoInputContainer}>
          <TextInput
            style={styles.promoInput}
            placeholder="Promo code:"
            placeholderTextColor="#666"
          />
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentMethodsSection}>
          <Text style={styles.sectionTitle}>Pay with:</Text>

          {/* Cards Option */}
          <TouchableOpacity style={styles.paymentOption}>
            <View style={styles.paymentOptionLeft}>
              <Text style={styles.paymentOptionText}>Credit cards or Mobile pay</Text>
              <View style={styles.cardIconsContainer}>
                <Icon name="card" size={20} color="#1a1f71" style={styles.cardIcon} />
                <Icon name="card" size={20} color="#ff5f00" style={styles.cardIcon} />
                <Icon name="card" size={20} color="#2671b9" style={styles.cardIcon} />
              </View>
            </View>
            <Icon name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Pay Button */}
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay FCFA10000</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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

export default PaymentScreen;