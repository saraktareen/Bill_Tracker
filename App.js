import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/Splashscreen';
import Login from './components/Login';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';


const Stack = createStackNavigator();

export default function App() {
  const [activeScreen, setActiveScreen] = useState('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveScreen('login');
    }, 2000); // 2 seconds duration for the splash screen

    return () => clearTimeout(timer);
  }, []);

  const linking = {
    prefixes: ['http://localhost:8081'],
    config: {
      screens: {
        Login: 'login',
        SignUp: 'signup',
        Homepage: 'home',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <View style={styles.container}>
        {activeScreen === 'splash' && <SplashScreen />}
        {activeScreen === 'login' && (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Homepage" component={Homepage} />
            
          </Stack.Navigator>
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
