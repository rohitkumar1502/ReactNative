// import React from 'react';
// import {SafeAreaView} from 'react-native';
// //import Login from './components/Jan15/Login';
// //import IntroSlider from './components/Jan15/IntroSlider';
// //import FlaxBox from './components/Jan14/FlaxBox';
// //import HorizentalScroll from './components/Jan14/HorizentalScroll';
// //import FlatList from './components/Jan13/FlatList';
// //import {ImageBackground, SafeAreaView} from 'react-native';
// //import ActivityAndicator from './components/Jan12/ActivityAndicator';
// //import Preseble from './components/Jan12/Preseble';
// //import CreateKeybordAvoi from './components/Jan12/CreateKeybordAvoi';
// //import TextSample from './components/TextSample';
// //import ImageField from './components/ImageField';
// //import TextExample from './components/Jan12/TextExample';
// //import ButtonCreate from './components/Jan12/ButtonCreate';
// //import ScrollItems from './components/Jan12/ScrollItems';
// //import Props from './components/Jan13/Props';
// //import Use from './components/Jan13/Use';
// //import UseEffectEx from './components/Jan13/UseEffectEx';
// //const img = require('./assets/Bac.jpg');

// function app() {
//   return (
//     // <View
//     //   style={{
//     //     flex: 1,
//     //     backgroundColor: 'green',
//     //     padding: 50,
//     //     alignItems: 'center',
//     //   }}>
//     //   <Text style={{color: 'red'}}>Welcome to React Natve</Text>
//     //   <Text style={{color: 'white'}}>Text Component</Text>

//     // </View>

//     // <ImageBackground source={img} resizeMode="cover" style={{flex: 1}}>

//     // </ImageBackground>

//     // <IntroSlider />
//     <SafeAreaView>
//       {/* <TextSample />
//         <ImageField /> */}
//       {/* <TextExample />
//         <ButtonCreate /> */}
//       {/* <ScrollItems /> */}
//       {/* <CreateKeybordAvoi /> */}
//       {/* <Preseble /> */}
//       {/* <CreateKeybordAvoi /> */}
//       {/* <ActivityAndicator /> */}
//       {/* <Props />
//         <Use /> */}
//       {/* <UseEffectEx /> */}
//       {/* <FlatList /> */}

//       {/* <FlaxBox />
//         <HorizentalScroll /> */}
//     </SafeAreaView>
//   );
// }
// export default app;

// import {View} from 'react-native';
// import React from 'react';
// import Login from './components/Jan15/Login';

// export default function App() {
//   return (
//     <View>
//       <Login />
//     </View>
//   );
// }
// import {View} from 'react-native';
// import React from 'react';
// import CurrencyCal from './components/Jan16/CurrencyCal';

// export default function App() {
//   return (
//     <View>
//       <CurrencyCal />
//     </View>
//   );
// }

// import {View} from 'react-native';
// import React from 'react';
// //import CurrencyCal from './components/Jan16/CurrencyCal';
// import PlatformTest from './components/Jan18/PlatformTest';

// export default function App() {
//   return (
//     <View>
//       <PlatformTest />
//     </View>
//   );
// }

// import {View} from 'react-native';
// import React from 'react';
// import ImageStyleProps from './components/Jan18/ImageStyleProps';

// const App = () => {
//   return (
//     <View>
//       <ImageStyleProps />
//     </View>
//   );
// };

// export default App;

// import {View} from 'react-native';
// import React from 'react';
// import PlatformSoecficExtension from './components/Jan18/PlatformSoecficExtension';

// const App = () => {
//   return (
//     <View>
//       <PlatformSoecficExtension />
//     </View>
//   );
// };

// export default App;
// import {View, SafeAreaView} from 'react-native';
// import React from 'react';
// import Style from './components/Jan22/style';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <Style />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// import {} from 'react-native';
// import React, {Component} from 'react';
// import HeightAndWidth from './components/Jan22/HeightAndWidth';

// export class App extends Component {
//   render() {
//     return (
//       <>
//         <HeightAndWidth />
//       </>
//     );
//   }
// }

// export default App;

// import {SafeAreaView} from 'react-native';
// import React from 'react';
// import MoveBox from './components/Jan23/MoveBox';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <MoveBox />
//     </SafeAreaView>
//   );
// };

// export default App;

// import {SafeAreaView} from 'react-native';
// import React from 'react';
// import {} from 'react-native-safe-area-context';
// import FadingIn from './components/Jan23/FadingIn';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <FadingIn />
//     </SafeAreaView>
//   );
// };

// export default App;
// Formik Example
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   SafeAreaView,
// } from 'react-native';
// import React from 'react';
// import {Formik} from 'formik';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.lgcn}>
//       <View style={styles.loginContainer}>
//         <Text>Login Screen</Text>
//         <Formik
//           initialValues={{email: '', password: ''}}
//           onSubmit={values => console.log(values)}>
//           {({handleChange, handleBlur, handleSubmit, values}) => (
//             <>
//               <TextInput
//                 name="email"
//                 placeholder="Email Address"
//                 style={styles.textInput}
//                 onChangeText={handleChange('email')}
//                 onBlur={handleBlur('email')}
//                 value={values.email}
//                 keyboardType="email-address"
//               />
//               <TextInput
//                 name="password"
//                 placeholder="Password"
//                 style={styles.textInput}
//                 onChangeText={handleChange('password')}
//                 onBlur={handleBlur('password')}
//                 value={values.password}
//                 secureTextEntry
//               />
//               <Button onPress={handleSubmit} title="Submit" />
//             </>
//           )}
//         </Formik>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   loginContainer: {
//     width: '80%',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     padding: 10,
//     elevation: 10,
//   },
//   textInput: {
//     height: 40,
//     width: '100%',
//     margin: 10,
//     backgroundColor: 'white',
//     borderColor: 'gray',
//     borderWidth: StyleSheet.hairlineWidth,
//     borderRadius: 10,
//   },
//   lgcn: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// import {SafeAreaView} from 'react-native';
// import React from 'react';
// import StylingCard from './components/Jan24/StylingCard';

// const App = () => {
//   return (
//     <>
//       <SafeAreaView>
//         <StylingCard />
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;

import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App
