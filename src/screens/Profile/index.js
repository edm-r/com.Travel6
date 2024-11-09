import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Profile = () => {
  const menuItems = [
    {
      id: 'bookings',
      icon: 'ticket-outline',
      title: 'Bookings'
    },
    {
      id: 'offers',
      icon: 'pricetag-outline',
      title: 'Offers'
    },
    {
      id: 'faq',
      icon: 'time-outline',
      title: 'FAQ\'s & Support'
    },
    {
      id: 'about',
      icon: 'information-circle-outline',
      title: 'About Us'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../../assets/images/Travel6_.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Edmond</Text>
            <Text style={styles.profilePhone}>+237 692972412</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="create-outline" size={20} color="#002147" />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
          >
            <View style={styles.menuItemLeft}>
              <Icon name={item.icon} size={22} color="#002147" style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;