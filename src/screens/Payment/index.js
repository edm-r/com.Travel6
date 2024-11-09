import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
const Payment = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Payment_S')}>
          <Text style={styles.payButtonText}>Pay FCFA10000</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;