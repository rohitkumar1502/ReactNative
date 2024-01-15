import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];
const Item = ({title}) => {
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>;
};
const FlatList = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        rederItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {},
  title: {},
});
export default FlatList;
