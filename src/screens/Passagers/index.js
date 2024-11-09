import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
const Passenger = () => {
  const [gender, setGender] = useState('male');
  const navigation = useNavigation();
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
          <TouchableOpacity style={styles.payButton}  onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.payButtonText}>Continue to pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Passenger;