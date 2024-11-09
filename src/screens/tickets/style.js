import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 16,
    },
    headerText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 16,
    },

    card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  companyInfo: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 12,
  },
  companyDetails: {
    flex: 1,
    marginLeft: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0B2C3D',
  },
  busType: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  cheapestTag: {
    backgroundColor: '#E8F5E9',
  },
  fastestTag: {
    backgroundColor: '#E3F2FD',
  },
  cheapestText: {
    color: '#2E7D32',
  },
  fastestText: {
    color: '#1565C0',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  journey: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0B2C3D',
  },
  station: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  duration: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 12,
  },
  durationText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  line: {
    height: 1,
    backgroundColor: '#EFEFEF',
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  seats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatsText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B2C3D',
  },
  });

export default styles;
  