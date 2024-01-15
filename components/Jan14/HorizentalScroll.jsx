import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HorizentalScroll() {
  return (
    <View>
      <View>
        <Text style={styles.textBox}>Horizontal Scroll</Text>
      </View>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.box, styles.card]}>
          <Text>Hor</Text>
        </View>
        <View style={[styles.box, styles.card]}>
          <Text>iz</Text>
        </View>
        <View style={[styles.box, styles.card]}>
          <Text>on</Text>
        </View>
        <View style={[styles.box, styles.card]}>
          <Text>tal</Text>
        </View>
        <View style={[styles.box, styles.card]}>
          <Text>Scro</Text>
        </View>
        <View style={[styles.box, styles.card]}>
          <Text>ling</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
    borderRadius: 4,
  },
  container: {
    padding: 8,
    flex: 1,
  },
});
