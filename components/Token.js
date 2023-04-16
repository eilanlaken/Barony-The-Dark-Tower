import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';

const Token = ({worldMap, initialPosition}) => {
  const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const handlePress = () => {
    Animated.timing(position, {
      toValue: { x: position.x._value + 20, y: position.y._value - 50 },
      duration: 500,
      useNativeDriver: true,
    }).start(({ finished }) => {
        if (finished) console.log(worldMap);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.circle, { transform: position.getTranslateTransform() }]} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: 'black',
  },
});

export default Token;