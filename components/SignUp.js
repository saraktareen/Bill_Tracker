import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const handleBlur = (field) => {
    switch (field) {
      case 'name':
        if (!name) {
          setNameError('Please enter your name');
        } else if (!validateName(name)) {
          setNameError('Name can only contain letters');
        } else {
          setNameError('');
        }
        break;
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
      case 'confirmPassword':
        if (!confirmPassword) {
          setConfirmPasswordError('Please confirm your password');
        } else if (confirmPassword !== password) {
          setConfirmPasswordError('Passwords do not match');
        } else {
          setConfirmPasswordError('');
        }
        break;
      default:
        break;
    }
  };

  const handleSignup = async () => {
    handleBlur('name');
    handleBlur('email');
    handleBlur('password');
    handleBlur('confirmPassword');

    let valid = !nameError && !emailError && !passwordError && !confirmPasswordError;

    if (valid) {
      try {
        const response = await fetch('http://192.168.1.2:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          Alert.alert('Success', data.message, [
            { text: 'OK', onPress: () => navigation.navigate('Homepage') },
          ]);
        } else {
          Alert.alert('Error', data.message);
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to signup');
      }
    } else {
      setTimeout(() => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bill Tracker</Text>

      <View style={styles.fields}>
        <Text style={styles.signupText}>Create your Account</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, name ? styles.inputActive : null]}
            placeholder="Enter your name"
            placeholderTextColor="#B7B7B7"
            value={name}
            onChangeText={setName}
            onBlur={() => handleBlur('name')}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, email ? styles.inputActive : null]}
            placeholder="Enter your email"
            placeholderTextColor="#B7B7B7"
            value={email}
            onChangeText={setEmail}
            onBlur={() => handleBlur('email')}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.passwordInput, password ? styles.inputActive : null]}
              placeholder="Enter your password"
              placeholderTextColor="#B7B7B7"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              onBlur={() => handleBlur('password')}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image source={require('C:/Users/PC/Desktop/bill_tracker/assets/password-eye.png')} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.passwordInput, confirmPassword ? styles.inputActive : null]}
              placeholder="Confirm your password"
              placeholderTextColor="#B7B7B7"
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onBlur={() => handleBlur('confirmPassword')}
            />
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <Image source={require('C:/Users/PC/Desktop/bill_tracker/assets/password-eye.png')} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
          {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'white',
    fontFamily: 'NovaSlim.ttf',
  },
  text: {
    fontSize: width * 0.06,
    fontFamily: 'NovaSlim.ttf',
    color: '#003366',
    alignSelf: 'center',
    marginTop: height * 0.1,
  },
  fields: {
    marginTop: 100,
    width: '100%',
  },
  signupText: {
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'NovaSlim.ttf',
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
  input: {
    height: height * 0.05,
    borderColor: '#B7B7B7',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: width * 0.02,
    color: 'black',
    fontFamily: 'NovaSlim.ttf',
    backgroundColor: 'white',
  },
  inputActive: {
    backgroundColor: 'skyblue', // Background color when input has a value
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#B7B7B7',
    borderWidth: 1,
    borderRadius: 5,
    height: height * 0.05,
    paddingHorizontal: width * 0.02,
  },
  passwordInput: {
    flex: 1,
    color: 'black',
    fontFamily: 'NovaSlim.ttf',
    backgroundColor: 'white',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#003366',
    padding: height * 0.015,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
    fontFamily: 'NovaSlim.ttf',
  },
  loginText: {
    textAlign: 'center',
    color: '#B7B7B7',
    fontFamily: 'NovaSlim.ttf',
  },
  loginLink: {
    color: '#4C208C',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  errorText: {
    color: 'red',
    marginTop: height * 0.01,
    fontFamily: 'NovaSlim.ttf',
  },
});

export default SignUp;
