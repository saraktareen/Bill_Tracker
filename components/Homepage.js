import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Pressable } from 'react-native';

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
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const navigateToBillListing = (billType) => {
    navigation.navigate('BillListingScreen', { billType });
  };

  const handleLogout = () => {
    // Handle logout functionality
    console.log("Logging out...");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{getCurrentDate()}</Text>
        <View style={styles.profileContainer}>
          <Text style={styles.name}>Sara</Text>
          <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
            <Image source={require('../assets/dropdown-white.png')} style={styles.dropdownImage} />
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={isDropdownVisible}
            animationType="fade"
            onRequestClose={toggleDropdown}
          >
            <Pressable style={styles.modalOverlay} onPress={toggleDropdown}>
              <View style={styles.dropdownMenu}>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                  <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Modal>
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
    height: 110,
    alignItems: 'center',
    backgroundColor: '#003366',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  date: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative', // Enable positioning of the dropdown menu
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
    marginRight: 10,
    marginLeft: 3,
  },
  dropdownButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownImage: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    borderRadius: 5,
    padding: 5,
    position: 'absolute', // Position dropdown menu below the image
    top: 73, // Adjust based on image size
    right: 20, // Align menu with the right edge of the dropdown image
  },
  logoutButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
  logoutText: {
    color: '#003366',
    fontSize: 13,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 100,
    paddingHorizontal: 21,
    flexDirection: 'column',
    alignItems: 'center',
  },
  billButton: {
    backgroundColor: '#d1d9e6',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 30,
    width: 320,
    height: 78,
    alignItems: 'center',
  },
  billButtonText: {
    fontSize: 25,
    color: '#000',
  },
});

export default Homepage;
