import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
const Blink = props => {
  const [isShowingText, setIsShowingText] = useState(true);
  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);
    return () => clearInterval(toggle);
  });
  if (!isShowingText) {
    return null;
  }
  return <Text>{props.text}</Text>;
};
const UseEffectEx = () => {
  return (
    <View>
      <Blink text="I love to blink" />
      <Blink text="Yes blinnk is so grat" />
      <Blink text="My name is Rohit Kumar" />
      <Blink text="I'm Fron Bihar" />
    </View>
  );
};
export default UseEffectEx;
