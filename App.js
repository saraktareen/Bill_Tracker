import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SplashScreen from './components/splashscreen';
import HomeScreen from './components/homescreen';

export default function App() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 2000); // 4 seconds duration for the splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isSplashScreenVisible ? <SplashScreen /> : <HomeScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
  },
});
