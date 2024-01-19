import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlatformTest = () => {
  const platformSpecific = Platform.select({
    ios: 'I am IOS',
    android: 'I am Android',
  });
  return (
    <View style={styles.container}>
      <Text>Welcome React Native</Text>
      <Text>
        Operating System:<Text style={styles.textColor}>{Platform.OS}</Text>
      </Text>
      <Text>{platformSpecific}</Text>
    </View>
  );
};

export default PlatformTest;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  textColor: {
    ...Platform.select({
      ios: {
        color: 'blue',
        fontSize: 25,
        fontFamily: 'arail',
      },
      android: {
        color: 'yellow',
        fontSize: 25,
        fontFamily: 'arail',
      },
    }),
  },
});
