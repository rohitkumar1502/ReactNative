import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
const ActivityAndicator = () => {
  return (
    <View style={[styles.container, styles.hori]}>
      <ActivityIndicator />
      {/* by default indicator small */}
      <ActivityIndicator size={'large'} color="#0000ff" />
      <ActivityIndicator size={'large'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //position: 'relative',
    verticalAlign: 'middle',
    //top: 200,
  },
  hori: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default ActivityAndicator;
