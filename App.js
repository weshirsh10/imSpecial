/* eslint-disable no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import createMainStack from './src/navigation/MainNavigation/mainNavigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

Icon.loadFont();

const App: () => React$Node = () => {
  return <NavigationContainer>{createMainStack()}</NavigationContainer>;
};

export default App;
