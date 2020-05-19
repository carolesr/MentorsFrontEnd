import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './navigation/AppNavigator'

import StartScreen from './screens/StartScreen'
import ProductScreen from './screens/ProductScreen'

export default function App() {
  return (
      <Navigator />
  );
  // return (
  //   <View style={styles.screen}>
  //     <View>
  //       <StartScreen />
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
