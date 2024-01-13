import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
const pic = require('../../assets/picture.jpg');
const ScrollItems = () => {
  return (
    <ScrollView>
      <View>
        <Text>
          This is Text The ScrollView is a generic scrolling container that can
          contain multiple components and views. The scrollable items can be
          heterogeneous, and you can scroll both vertically and horizontally (by
          setting the horizontal property).
        </Text>
        <Image
          source={pic}
          style={{height: 100, width: 100, borderRadius: 20, margin: 20}}
        />
        <Image
          source={pic}
          style={{
            height: 100,
            width: 100,
            borderRadius: 20,
            margin: 20,
            position: 'relative',
            left: 200,
          }}
        />
      </View>
      <Text>
        This is Text The ScrollView is a generic scrolling container that can
        contain multiple components and views. The scrollable items can be
        heterogeneous, and you can scroll both vertically and horizontally (by
        setting the horizontal property).
      </Text>
      <Image
        source={pic}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          margin: 20,
          position: 'relative',
          left: 200,
        }}
      />
      <Image
        source={pic}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          margin: 20,
          position: 'relative',
          left: 200,
        }}
      />
      <Image
        source={pic}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          margin: 20,
          position: 'relative',
          left: 200,
        }}
      />
      <Image
        source={pic}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          margin: 20,
          position: 'relative',
          left: 200,
        }}
      />
    </ScrollView>
  );
};

export default ScrollItems;
