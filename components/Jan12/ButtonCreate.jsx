import React from 'react';
import {Alert, Button, Text, View} from 'react-native';

const ButtonCreate = () => {
  return (
    <View>
      <Text>Creating Button</Text>

      <Button title="Button" onPress={() => Alert.alert('Button Press')} />
    </View>
  );
};
//const styles = StyleSheet.create({});
export default ButtonCreate;
