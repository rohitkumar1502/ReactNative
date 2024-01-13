import React from 'react';
import {View, Text, Image} from 'react-native';
export default function TextSample() {
  return (
    <View
      style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View
        style={{
          backgroundColor: 'blue',
          height: 100,
          width: 100,
          margin: 20,
          borderRadius: 20,
          justifyContent:'center',
        }}>
        <Text style={{textAlign:'center'}}>Blue</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          height: 100,
          width: 100,
          margin: 20,
          borderRadius: 20,
          justifyContent:'center',
        }}>
        <Text style={{textAlign:'center'}}>Green</Text>
      </View>
      <View
        style={{
          backgroundColor: 'yellow',
          height: 100,
          width: 100,
          margin: 20,
          borderRadius: 20,
          justifyContent:'center',
        }}>
        <Text style={{textAlign:'center',fontSize:20}}>Orange</Text>
      </View>
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
}
