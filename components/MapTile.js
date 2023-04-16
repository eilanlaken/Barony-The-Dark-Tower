import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Token from './Token';

const MapTile = ({ tile, onPress, x, y, staticEntities }) => {

  const dynamicEntities = useState([
    1,2,3,4
  ])

  return (
    <View style={{...styles.container, transform: [{ translateX: x }, { translateY: y }]}}>
      <Image style={styles.image} source={getImageSource(tile)}/>
      
      <TouchableOpacity onPress={onPress} style={styles.touchable} />
      {[1,2,3,4].map((entity, index) => <View key={index} style={{...styles.circle, left: 8 + 23 * index, top: 40}} />)}
    </View>
  );
};

const getImageSource = tile => {
    if (tile == 'Green') {
        return require('../assets/tiles/TileHexagonGreen.png')
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
    image: {
        width: 100,
        height: 100
    },
    touchable: {
        position: 'absolute',
        width: 70,
        height: 70,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 25,
        top: 15,
        right: 15,
    },
    circle: {
        position: 'absolute',
        width: 15,
        height: 15,
        borderRadius: 30,
        backgroundColor: "red",
    },
  });
export default MapTile;
