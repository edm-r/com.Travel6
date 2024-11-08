import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PassengerDetailsScreen = () => {
  const [gender, setGender] = useState('male');

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        
        <Text style={styles.headerTitle}>Passenger Details</Text>
      </View>

      <View style={styles.content}>
        {/* Boarding Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Boarding and Deboarding points:</Text>
          <View style={styles.boardingCard}>
            <View style={styles.boardingRow}>
              <View style={styles.boardingPoint}>
                <Icon name="train-outline" size={18} color="#555" />
                <Text style={styles.boardingText}>Yaounde @ 5:50am</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.changeButton}>Change</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boardingDivider} />
            <View style={styles.boardingPoint}>
              <Icon name="train-outline" size={18} color="#555" />
              <Text style={styles.boardingText}>Douala @ 11:15am</Text>
            </View>
          </View>
        </View>

        {/* Passenger Details Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Passenger details:</Text>
            <TouchableOpacity style={styles.addPassengerButton}>
              <Text style={styles.addPassengerText}>+ Add Passenger</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formRow}>
            <View style={styles.ageContainer}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                value="29"
                keyboardType="numeric"
                placeholderTextColor="#999"
              />
            </View>
            <View style={styles.genderContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.genderOptions}>
                <TouchableOpacity 
                  style={styles.genderOption} 
                  onPress={() => setGender('male')}
                >
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioOuter,
                      gender === 'male' && styles.radioOuterSelected
                    ]}>
                      {gender === 'male' && <View style={styles.radioInner} />}
                    </View>
                    <Text style={[
                      styles.genderText,
                      gender === 'male' && styles.genderTextSelected
                    ]}>Male</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.genderOption}
                  onPress={() => setGender('female')}
                >
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioOuter,
                      gender === 'female' && styles.radioOuterSelected
                    ]}>
                      {gender === 'female' && <View style={styles.radioInner} />}
                    </View>
                    <Text style={[
                      styles.genderText,
                      gender === 'female' && styles.genderTextSelected
                    ]}>Female</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Contact Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Contact details:</Text>
          <View style={styles.formGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.checkboxContainer}>
            <View style={styles.checkbox}>
              <Icon name="checkmark" size={16} color="#FFF" />
            </View>
            <Text style={styles.checkboxLabel}>
              Send mail and message about the trip details?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>FCFA10000</Text>
          </View>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Continue to pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

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

export default PassengerDetailsScreen;