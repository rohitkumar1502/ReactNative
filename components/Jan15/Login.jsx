import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function Login() {
  return (
    <SafeAreaView>
      <View style={styles.textView}>
        <Text style={styles.text}>Login User</Text>
        <Text style={styles.des}>You can reach me at any time in </Text>
        <Text style={styles.des}>rohit.12110865@lpu.in</Text>
      </View>
      <View style={styles.lebelConatiner}>
        <Text style={styles.lebel}>Enter Your User Name:</Text>
        <TextInput
          style={styles.inputStyles}
          autoCapitalize="none"
          autoComplete={false}
        />
      </View>
      <View style={styles.lebelConatiner}>
        <Text style={styles.lebel}>Enter Your Password:</Text>
        <TextInput
          style={styles.inputStyles}
          autoCapitalize="none"
          autoComplete={false}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.boxConatainer}>
        <BouncyCheckbox
          style={styles.box}
          onPress={(isChecked: boolean) => {}}
        />
        <Text style={styles.texttandc}>I have read the T&C</Text>
      </View>
      <View>
        <Pressable onPress={null} style={styles.loginBut}>
          <Text style={styles.logtext}>Login</Text>
        </Pressable>
      </View>
      <View>
        <Button
          title="New user"
          onPress={() => Alert.alert('You are New User')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginBut: {
    paddingTop: 19,
    backgroundColor: 'blue',
    margin: 15,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 15,
  },
  boxConatainer: {
    flexDirection: 'row',
  },
  texttandc: {
    paddingTop: 20,
    fontSize: 17,
  },
  box: {
    paddingLeft: 20,
    paddingTop: 18,
  },
  textView: {
    // flex: 1,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  des: {
    paddingTop: 14,
    fontSize: 20,
  },
  lebelConatiner: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  lebel: {
    fontSize: 20,
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
    margin: 5,
  },
});
