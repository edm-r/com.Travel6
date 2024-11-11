import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f6f7',
    },
    logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#e63946',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },

    profileCard: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      marginBottom: 1,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: 64,
      height: 64,
      borderRadius: 32,
    },
    profileText: {
      marginLeft: 12,
    },
    profileName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#002147',
      marginBottom: 4,
    },
    profilePhone: {
      fontSize: 14,
      color: '#666',
    },
    editButton: {
      padding: 8,
    },
    inputContainer: {
  marginBottom: 20,
  flexDirection: 'column', // Pour que le label et le champ soient alignés verticalement
},
inputLabel: {
  fontSize: 16,
  marginBottom: 5,  // Espacement entre le label et le champ
},
input: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  paddingLeft: 10,
  fontSize: 16,
  borderRadius: 5,
},
    menuContainer: {
      backgroundColor: '#fff',
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#f5f6f7',
    },
    menuItemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuIcon: {
      marginRight: 12,
    },
    menuText: {
      fontSize: 15,
      color: '#002147',
    },
  });

  export default styles