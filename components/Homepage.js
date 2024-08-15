import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  return `${day}${suffix} ${month} ${year}`;
};

const Homepage = ({ navigation }) => {
  const navigateToBillListing = (billType) => {
    navigation.navigate('BillListingScreen', { billType });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{getCurrentDate()}</Text>
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}></View>
          <Text style={styles.name}>Sara</Text>
          <TouchableOpacity onPress={() => {/* Handle log out functionality */}}>
            <Text style={styles.logoutText}>V</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.billButton} onPress={() => navigateToBillListing('Electricity Bill')}>
          <Text style={styles.billButtonText}>Electricity Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.billButton} onPress={() => navigateToBillListing('Gas Bill')}>
          <Text style={styles.billButtonText}>Gas Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.billButton} onPress={() => navigateToBillListing('Water Bill')}>
          <Text style={styles.billButtonText}>Water Bill</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: 10,
  },
  date: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '10',
  },
  
  profileCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginRight: 5,
  },
  name: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Poppins',
    marginRight: 5,
  },
  logoutText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Poppins',
  },
  buttonContainer: {
    marginTop: 100,
    paddingHorizontal: 21, // Adjust padding to match Figma X coordinate
    flexDirection: 'column',
    alignItems: 'center', // Align buttons to the left
  },
  billButton: {
    backgroundColor: '#d1d9e6',
    paddingVertical: 20, 
    paddingHorizontal: 10, 
    borderRadius: 10,
    marginBottom: 30,
    width: 347, 
    height: 78, 
    alignItems: 'center',
  },
  billButtonText: {
    fontSize: 25,
    color: '#000',
    marginTop: '10',
  },
});

export default Homepage;
