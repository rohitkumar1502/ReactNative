import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
const Preseble = () => {
  const [timePressed, setTimepressed] = useState(0);
  let textItem = '';
  if (timePressed > 1) {
    textItem = timePressed + 'X times onPressed';
  } else if (timePressed > 0) {
    textItem = 'onPressed';
  }
  return (
    <View>
      <Pressable
        onPress={() => {
          setTimepressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'orange',
          },
          styles.wraperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View>
        <Text style={styles.textbox}>{textItem}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  wraperCustom: {
    borderRadius: 8,
    padding: 20,
    margin: 10,
  },
  textbox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
export default Preseble;
