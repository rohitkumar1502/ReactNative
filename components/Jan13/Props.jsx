import React from 'react';
import {Text, View} from 'react-native';
const Greating = props => {
  return (
    <View>
      <Text>My name is {props.name}</Text>
    </View>
  );
};
const GreatingSecond = props => {
  return (
    <View>
      <Text>I'm From {props.lucation}</Text>
    </View>
  );
};
const Props = () => {
  return (
    <View>
      <Greating name="Rohit" />
      <Greating name="Kumar" />
      <GreatingSecond lucation="Muzaffarpur" />
    </View>
  );
};
export default Props;
