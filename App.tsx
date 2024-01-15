import React from 'react';
import {SafeAreaView} from 'react-native';
//import IntroSlider from './components/Jan15/IntroSlider';
//import FlaxBox from './components/Jan14/FlaxBox';
//import HorizentalScroll from './components/Jan14/HorizentalScroll';
import FlatList from './components/Jan13/FlatList';
//import {ImageBackground, SafeAreaView} from 'react-native';
//import ActivityAndicator from './components/Jan12/ActivityAndicator';
//import Preseble from './components/Jan12/Preseble';
//import CreateKeybordAvoi from './components/Jan12/CreateKeybordAvoi';
//import TextSample from './components/TextSample';
//import ImageField from './components/ImageField';
//import TextExample from './components/Jan12/TextExample';
//import ButtonCreate from './components/Jan12/ButtonCreate';
//import ScrollItems from './components/Jan12/ScrollItems';
//import Props from './components/Jan13/Props';
//import Use from './components/Jan13/Use';
//import UseEffectEx from './components/Jan13/UseEffectEx';
//const img = require('./assets/Bac.jpg');

function app() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'green',
    //     padding: 50,
    //     alignItems: 'center',
    //   }}>
    //   <Text style={{color: 'red'}}>Welcome to React Natve</Text>
    //   <Text style={{color: 'white'}}>Text Component</Text>

    // </View>

    // <ImageBackground source={img} resizeMode="cover" style={{flex: 1}}>

    // </ImageBackground>

    // <IntroSlider />
    <SafeAreaView>
      {/* <ScrollView> */}
      {/* <TextSample />
        <ImageField /> */}
      {/* <TextExample />
        <ButtonCreate /> */}
      {/* <ScrollItems /> */}
      {/* <CreateKeybordAvoi /> */}
      {/* <Preseble /> */}
      {/* <CreateKeybordAvoi /> */}
      {/* <ActivityAndicator /> */}
      {/* <Props />
        <Use /> */}
      {/* <UseEffectEx /> */}
      <FlatList />

      {/* <FlaxBox />
        <HorizentalScroll /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
export default app;
