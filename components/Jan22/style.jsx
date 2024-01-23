import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const style = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Just Red</Text>
      <Text style={styles.bigBlue}>Just Big Blue</Text>
      <Text style={[styles.bigRed, styles.bigBlue]}>Big Blue, Then Red</Text>
      <Text style={[styles.bigBlue, styles.bigRed]}>Big Red, Then </Text>
    </View>
  );
};

export default style;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  red: {
    color: 'red',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigRed: {
    color: 'red',
  },
});
