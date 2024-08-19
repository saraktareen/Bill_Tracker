import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle password visibility

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
    return passwordRegex.test(password);
  };

  const handleBlur = (field) => {
    switch (field) {
      case 'email':
        if (!email) {
          setEmailError('Please enter your email');
        } else if (!validateEmail(email)) {
          setEmailError('Please enter a valid email');
        } else {
          setEmailError('');
        }
        break;
      case 'password':
        if (!password) {
          setPasswordError('Please enter your password');
        } else if (!validatePassword(password)) {
          setPasswordError('Password must be 8-12 characters long with numericals, special characters, and capital letters');
        } else {
          setPasswordError('');
        }
        break;
      default:
        break;
    }
  };

  const handleLogin = () => {
    // Trigger blur validation for all fields
    handleBlur('email');
    handleBlur('password');

    let valid = !emailError && !passwordError;

    if (valid) {
      // Navigate to the Homepage screen
      navigation.navigate('Homepage');
    } else {
      setTimeout(() => {
        setEmailError('');
        setPasswordError('');
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bill Tracker</Text>
      
      <View style={styles.fields}>
        <Text style={styles.loginText}>Login to your Account</Text>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your email" 
            placeholderTextColor="#B7B7B7"
            value={email}
            onChangeText={setEmail}
            onBlur={() => handleBlur('email')}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your password" 
            placeholderTextColor="#B7B7B7"
            secureTextEntry={!isPasswordVisible} // Toggle secureTextEntry based on state
            value={password}
            onChangeText={setPassword}
            onBlur={() => handleBlur('password')}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image
              source={require('C:/Users/PC/Desktop/bill_tracker/assets/password-eye.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Do not have an account?        
          <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05, // 5% of screen width for horizontal padding
    backgroundColor: 'white',
  },
  text: {
    fontSize: width * 0.06, // 6% of screen width for font size
    fontFamily: 'NovaSlim.ttf',
    color: '#003366',
    alignSelf: 'center',
    marginTop: height * 0.1, // 10% of screen height for top margin
  },
  fields: {
    marginTop: 100, // 100 pixels beneath the "Bill Tracker" title
    width: '100%',
  },
  loginText: {
    fontSize: width * 0.04, // 4% of screen width for font size
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
    position: 'relative', // Required for absolute positioning of the eye icon
  },
  input: {
    height: height * 0.05, // 5% of screen height for input height
    borderColor: '#B7B7B7',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: width * 0.02, // 2% of screen width for horizontal padding
    color: 'black',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: width * 0.02, // Position the eye icon to the right
    top: height * 0.012, // Center the eye icon vertically
  },
  eyeIcon: {
    width: 30,
    height: 30,
    tintColor: '#B7B7B7', // Optional: tint the eye icon color
  },
  button: {
    backgroundColor: '#003366',
    padding: height * 0.015, // 1.5% of screen height for padding
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04, // 4% of screen width for font size
  },
  signupText: {
    textAlign: 'center',
    color: '#B7B7B7',
  },
  signupLink: {
    color: '#4C208C',
    textDecorationLine: 'underline',
    marginLeft: '10px',
  },
  errorText: {
    color: 'red',
    marginTop: height * 0.01, // 1% of screen height for top margin
  },
});

export default Login;
