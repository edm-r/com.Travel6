import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingCard from './BookingCard';
const Tab = createMaterialTopTabNavigator();
import styles from './style';
// Composants pour chaque onglet
const ActiveBookings = () => (
  <View style={styles.tabContent}>
    <BookingCard
      date="Today"
      persons="2"
      price="589"
      from="YDE"
      to="DLA"
    />
    <BookingCard
      date="Tomorrow"
      persons="2"
      price="589"
      from="YDE"
      to="DLA"
    />
  </View>
);

const CompletedBookings = () => (
  <View style={styles.tabContent}>
    <Text>Completed Bookings</Text>
  </View>
);

const CancelledBookings = () => (
  <View style={styles.tabContent}>
    <Text>Cancelled Bookings</Text>
  </View>
);

// Composant principal avec la navigation par onglets
const FilterTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: { height: 0 }, // Cache l'indicateur par défaut
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#666666',
        swipeEnabled: true,
      }}
    >
      <Tab.Screen 
        name="Active" 
        component={ActiveBookings}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[
              styles.tabItem,
              focused ? styles.activeTabItem : null
            ]}>
              <Text style={[
                styles.tabText,
                focused ? styles.activeTabText : styles.inactiveTabText
              ]}>
                Active
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Completed" 
        component={CompletedBookings}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[
              styles.tabItem,
              focused ? styles.activeTabItem : null
            ]}>
              <Text style={[
                styles.tabText,
                focused ? styles.activeTabText : styles.inactiveTabText
              ]}>
                Completed
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Cancelled" 
        component={CancelledBookings}
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={[
              styles.tabItem,
              focused ? styles.activeTabItem : null
            ]}>
              <Text style={[
                styles.tabText,
                focused ? styles.activeTabText : styles.inactiveTabText
              ]}>
                Cancelled
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FilterTabs;