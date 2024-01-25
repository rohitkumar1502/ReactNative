import {Animated, View} from 'react-native';
import React from 'react';

const MoveBox = () => {
  const postion = new Animated.ValueXY({x: 0, y: 0});
  const rotate = postion.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  Animated.timing(postion, {
    toValue: {
      x: 200,
      y: 400,
    },
    duration: 2000,
    useNativeDriver: true,
  }).start();
  return (
    <View>
      <Animated.View
        style={{
          width: 80,
          height: 80,
          backgroundColor: 'red',
          transform: [(rotate: rotate)],
        }}></Animated.View>
    </View>
  );
};

export default MoveBox;
