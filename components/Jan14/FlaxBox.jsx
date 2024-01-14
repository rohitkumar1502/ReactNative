import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlaxBox() {
  return (
    <View>
      <Text style={styles.textBox}>FlaxBox</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.textOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.textTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.textThree]}>
          <Text>Orange</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    gap: 5,
  },
  textOne: {
    backgroundColor: 'red',
  },
  textTwo: {
    backgroundColor: 'green',
  },
  textThree: {
    backgroundColor: 'orange',
  },
});
