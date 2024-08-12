// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window');

// const SignUp = () => {
//   const navigation = useNavigation();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/;
//     return passwordRegex.test(password);
//   };

//   const validateName = (name) => {
//     const nameRegex = /^[A-Za-z\s]+$/;
//     return nameRegex.test(name);
//   };

//   const handleBlur = (field) => {
//     switch (field) {
//       case 'name':
//         if (!name) {
//           setNameError('Please enter your name');
//         } else if (!validateName(name)) {
//           setNameError('Name can only contain letters');
//         } else {
//           setNameError('');
//         }
//         break;
//       case 'email':
//         if (!email) {
//           setEmailError('Please enter your email');
//         } else if (!validateEmail(email)) {
//           setEmailError('Please enter a valid email');
//         } else {
//           setEmailError('');
//         }
//         break;
//       case 'password':
//         if (!password) {
//           setPasswordError('Please enter your password');
//         } else if (!validatePassword(password)) {
//           setPasswordError('Password must be 8-12 characters long with numericals, special characters, and capital letters');
//         } else {
//           setPasswordError('');
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSignup = () => {
//     // Trigger blur validation for all fields
//     handleBlur('name');
//     handleBlur('email');
//     handleBlur('password');

//     let valid = !nameError && !emailError && !passwordError;

//     if (valid) {
//       // Navigate to the homepage on successful signup
//       navigation.navigate('Homepage');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Bill Tracker</Text>
      
//       <View style={styles.fields}>
//         <Text style={styles.signupText}>Create your Account</Text>

//         <View style={styles.inputContainer}>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Enter your name" 
//             placeholderTextColor="#B7B7B7"
//             value={name}
//             onChangeText={setName}
//             onBlur={() => handleBlur('name')}
//           />
//           {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Enter your email" 
//             placeholderTextColor="#B7B7B7"
//             value={email}
//             onChangeText={setEmail}
//             onBlur={() => handleBlur('email')}
//           />
//           {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Enter your password" 
//             placeholderTextColor="#B7B7B7"
//             secureTextEntry={true}
//             value={password}
//             onChangeText={setPassword}
//             onBlur={() => handleBlur('password')}
//           />
//           {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
//         </View>

//         <TouchableOpacity style={styles.button} onPress={handleSignup}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>

//         <Text style={styles.loginText}>
//           Already have an account? 
//           <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
//             Login
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: width * 0.05, // 5% of screen width for horizontal padding
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: width * 0.06, // 6% of screen width for font size
//     fontFamily: 'NovaSlim.ttf',
//     color: '#003366',
//     alignSelf: 'center',
//     marginTop: height * 0.1, // 10% of screen height for top margin
//   },
//   fields: {
//     marginTop: 100, // 100 pixels beneath the "Bill Tracker" title
//     width: '100%',
//   },
//   signupText: {
//     fontSize: width * 0.04, // 4% of screen width for font size
//     marginBottom: height * 0.02, // 2% of screen height for bottom margin
//     textAlign: 'left',
//     alignSelf: 'flex-start',
//     fontFamily: 'NovaSlim',
//   },
//   inputContainer: {
//     marginBottom: height * 0.02, // 2% of screen height for bottom margin
//   },
//   input: {
//     height: height * 0.05, // 5% of screen height for input height
//     borderColor: '#B7B7B7',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: width * 0.02, // 2% of screen width for horizontal padding
//     color: 'black',
//     fontFamily: 'NovaSlim',
//   },
//   button: {
//     backgroundColor: '#003366',
//     padding: height * 0.015, // 1.5% of screen height for padding
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: height * 0.02, // 2% of screen height for bottom margin
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: width * 0.04, // 4% of screen width for font size
//     fontFamily: 'NovaSlim',
//   },
//   loginText: {
//     textAlign: 'center',
//     color: '#B7B7B7',
//     fontFamily: 'NovaSlim',
//   },
//   loginLink: {
//     color: '#4C208C',
//     textDecorationLine: 'underline',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: height * 0.01, 
//     fontFamily: 'NovaSlim',
//   },
// });

// export default SignUp;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
      default:
        break;
    }
  };

  const handleSignup = async () => {
    // Trigger blur validation for all fields
    handleBlur('name');
    handleBlur('email');
    handleBlur('password');

    // Ensure the errors are checked after blurring
    let valid = !nameError && !emailError && !passwordError;

    if (valid) {
      try {
        const response = await fetch('http://192.168.1.2:3000/signup', { // Replace with your backend IP address and port
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
            style={styles.input} 
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
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            onBlur={() => handleBlur('password')}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
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
  signupText: {
    fontSize: width * 0.04, // 4% of screen width for font size
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'NovaSlim',
  },
  inputContainer: {
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
  },
  input: {
    height: height * 0.05, // 5% of screen height for input height
    borderColor: '#B7B7B7',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: width * 0.02, // 2% of screen width for horizontal padding
    color: 'black',
    fontFamily: 'NovaSlim',
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
    fontFamily: 'NovaSlim',
  },
  loginText: {
    textAlign: 'center',
    color: '#B7B7B7',
    fontFamily: 'NovaSlim',
  },
  loginLink: {
    color: '#4C208C',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginTop: height * 0.01, 
    fontFamily: 'NovaSlim',
  },
});

export default SignUp;
