import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';
const CreateKeybordAvoi = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.user}>Login User</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnConainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  user: {
    fontSize: 36,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnConainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
export default CreateKeybordAvoi;
