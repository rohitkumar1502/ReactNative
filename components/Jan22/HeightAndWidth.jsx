import {StyleSheet, View} from 'react-native';
import React from 'react';

const HeightAndWidth = () => {
  return (
    <View style={{flex:1}}>
      {/* A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible. */}
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 2, backgroundColor: 'orange'}}></View>
      <View style={{flex: 3, backgroundColor: 'blue'}}></View>
    </View>
  );
};

export default HeightAndWidth;
