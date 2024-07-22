import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    
    <View style={styles.container}>
        <Image source={require('../assets/Coin.png')} style={styles.image} />
        <Text style={styles.text}>Bill Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 10, // Space between the image and the text
  },
  text: {
    fontfamily: 'NovaSlim.ttf',
    fontSize: 24,
    color: 'white',
  },
});

export default SplashScreen;
