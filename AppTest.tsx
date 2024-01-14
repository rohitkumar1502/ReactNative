import React from 'react';
import {SafeAreaView, Text, useColorScheme, StyleSheet} from 'react-native';
const AppTest = () => {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <SafeAreaView style={styles.contain}>
      <Text style={isDarkMode ? styles.isBlack : styles.isWhile}>Rohit</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isWhile: {
    color: 'white',
  },
  isBlack: {
    color: 'black',
  },
});
export default AppTest;
