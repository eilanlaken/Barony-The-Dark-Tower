import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require('../../assets/ui/banner.png')}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textLogo}>Welcome to the game!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    height: 200,
    alignItems: 'center',
    paddingTop: 60,
  },
  logo: {
    width: 256,
    height: 256,
  },
  textContainer: {
    position: 'absolute',
    top: 170,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});