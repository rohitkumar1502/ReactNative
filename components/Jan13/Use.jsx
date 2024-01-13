import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
const Use = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState({cname: '', location: ''});
  const [state, setState] = useState(false);
  const clickHandlar = () => {
    setName('Rohit');
    setCollege({cname: 'LPU', location: 'Punjab'});
    setState(true);
  };
  return (
    <View>
      <Text>My name is {name}</Text>
      <Text>
        My College name is {college.cname} and located in {college.location}
      </Text>
      <Text>Current state is {state ? 'Good' : 'Bad'}</Text>
      <Button onPress={clickHandlar} title="Click Me" />
    </View>
  );
};
export default Use;
