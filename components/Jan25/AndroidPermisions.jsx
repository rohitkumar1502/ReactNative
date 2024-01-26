import {
  Button,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
const requestCamraPermisions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camra permisions',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask me later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You Can use your camra');
    } else {
      console.log('Camra permisions denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const AndroidPermisions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>AndroidPermisions: Try Permisons</Text>
      <Button title="requist permisions" onPress={requestCamraPermisions} />
    </View>
  );
};

export default AndroidPermisions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
