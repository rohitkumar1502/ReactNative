import {Text, View, Platform, SafeAreaView} from 'react-native';
import React from 'react';

const PlatformSoecficExtension = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          This is a {Platform.OS === 'ios' ? 'iOS' : 'Android'} device.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PlatformSoecficExtension;
