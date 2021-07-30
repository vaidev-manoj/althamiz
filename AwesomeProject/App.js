import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,} from 'react-native';
import AppButton from './app/component/AppButton';
//import card from './app/component/card';

import ViewImagescreen from './screens/ViewImagescreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Card from './app/component/card';
import Cardlist from './screens/cardlist';
import Carddetails from './screens/carddetails';




export default function App() {
  return (
<ViewImagescreen></ViewImagescreen>
  );
}

const styles = StyleSheet.create({
  container: {
   
    
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center'
  }
});
