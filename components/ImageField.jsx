import React from 'react';
import {View, Image} from 'react-native';
const pic = require('../assets/picture.jpg');

const ImageField = () => {
  return (
    <View>
      <View style={{paddingTop: 170}}>
        <Image
          source={pic}
          style={{height: 100, width: 100, borderRadius: 20}}
        />
      </View>
      <View style={{paddingTop: 20}}>
        <Image
          source={pic}
          style={{height: 100, width: 100, borderRadius: 20}}
        />
      </View>
    </View>
  );
};
export default ImageField;
