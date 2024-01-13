import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const TextExample = () => {
  return (
    <View>
      <Text>
        <Text style={styles.blue}>Welcome</Text> to React Native{' '}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  blue: {
    color: 'blue',
  },
});
export default TextExample;
