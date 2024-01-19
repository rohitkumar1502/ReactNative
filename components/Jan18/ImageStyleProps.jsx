import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
const img = require('../../assets/Iynque-Ios7-Style-Photos.512.png');

const ImageStyleProps = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={img} style={styles.imageCover} />
          <Text>resizeMode: 'cover'</Text>
        </View>
        <View style={styles.container}>
          <Image source={img} style={styles.imageCotain} />
          <Text>resizeMode: 'contain'</Text>
        </View>
        <View style={styles.container}>
          <Image source={img} style={styles.imageStrech} />
          <Text>resizeMode: 'strech'</Text>
        </View>
        <View style={styles.container}>
          <Image source={img} style={styles.imageRepeat} />
          <Text>resizeMode: 'repeat'</Text>
        </View>
        <View style={styles.container}>
          <Image source={img} style={styles.imageCenter} />
          <Text>resizeMode: 'center'</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImageStyleProps;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // height: '100%',
    // textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 20,
  },
  imageCover: {
    resizeMode: 'cover',
    height: 100,
    width: 200,
  },
  imageCotain: {
    resizeMode: 'contain',
    height: 100,
    width: 200,
  },
  imageStrech: {
    resizeMode: 'stretch',
    height: 100,
    width: 200,
  },
  imageRepeat: {
    resizeMode: 'repeat',
    height: 160,
    width: 400,
  },
  imageCenter: {
    resizeMode: 'center',
    height: 160,
    width: 400,
  },
});
