import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Install this package if not already available
import RNPickerSelect from 'react-native-picker-select'; // Import the Picker

const BillListingScreen = ({ route }) => {
  const { billType } = route.params; // Extract bill type from route params
  const navigation = useNavigation(); // Hook to access navigation

  // Set default values
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0-based index for months

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [totalBill, setTotalBill] = useState('');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});

  // Generate month options
  const months = Array.from({ length: 12 }, (_, i) => ({
    label: new Date(0, i).toLocaleString('default', { month: 'long' }),
    value: i,
  }));

  // Generate year options for the last 10 years
  const years = Array.from({ length: 10 }, (_, i) => ({
    label: (currentYear - i).toString(),
    value: currentYear - i,
  }));

  const validate = () => {
    let isValid = true;
    const errors = {};

    if (month === undefined) {
      errors.month = 'Month is required.';
      isValid = false;
    }

    if (year === undefined) {
      errors.year = 'Year is required.';
      isValid = false;
    }

    if (!totalBill) {
      errors.totalBill = 'Total bill is required.';
      isValid = false;
    } else if (isNaN(totalBill)) {
      errors.totalBill = 'Total bill must be a number.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Handle form submission
      console.log('Form submitted:', { month, year, totalBill, note });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{billType}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.label}>Please select the month and year</Text>

        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setMonth(value)}
            items={months}
            value={month}
            style={pickerSelectStyles}
            placeholder={{ label: 'Month', value: null }}
          />
          <RNPickerSelect
            onValueChange={(value) => setYear(value)}
            items={years}
            value={year}
            style={pickerSelectStyles}
            placeholder={{ label: 'Year', value: null }}
          />
        </View>
        {errors.month && <Text style={styles.errorText}>{errors.month}</Text>}
        {errors.year && <Text style={styles.errorText}>{errors.year}</Text>}

        <Text style={styles.label}>Write the amount of the bill</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={totalBill}
          onChangeText={setTotalBill}
        />
        {errors.totalBill && <Text style={styles.errorText}>{errors.totalBill}</Text>}

        <Text style={styles.label}>You can add any additional note for this bill</Text>
        <TextInput
          style={[styles.textInput, styles.noteInput]}
          multiline
          numberOfLines={4}
          value={note}
          onChangeText={setNote}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      height: 50, // Increased height
      borderColor: '#000000', // Changed border color
      borderWidth: 2, // Increased border width
      borderRadius: 8, // More rounded corners
      paddingTop: 10, // Applied padding
      paddingBottom: 10, // Applied padding
      paddingLeft: 5, // Applied padding
      paddingRight: 5, // Applied padding
      marginRight: 20, // Applied margin
      fontSize: 18, // Increased font size
    },
    inputAndroid: {
      height: 50, // Increased height
      borderColor: '#000000', // Changed border color
      borderWidth: 2, // Increased border width
      borderRadius: 8, // More rounded corners
      paddingTop: 10, // Applied padding
      paddingBottom: 10, // Applied padding
      paddingLeft: 5, // Applied padding
      paddingRight: 5, // Applied padding
      marginRight: 20, // Applied margin
      fontSize: 18, // Increased font size
    },
    inputWeb: {
      height: 50, // Increased height
      borderColor: '#000000', // Changed border color
      borderWidth: 2, // Increased border width
      borderRadius: 8, // More rounded corners
      paddingTop: 10, // Applied padding
      paddingBottom: 10, // Applied padding
      paddingLeft: 5, // Applied padding
      paddingRight: 5, // Applied padding
      marginRight: 20, // Applied margin
      fontSize: 15, // Increased font size
    },
  });

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: 15,
    height: 80,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 60,
    flexGrow: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the pickers horizontally
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 20,
  },
  noteInput: {
    height: 100,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: 90,
    borderRadius: 20,
    alignSelf: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default BillListingScreen;
