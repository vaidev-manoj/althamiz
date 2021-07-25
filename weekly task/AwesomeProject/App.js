import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Buttoncomp from './screens/components/Button';
//import Button from './screens/components/Button';

//import Button from '../component/Buttoncomp';
import ViewImagescreen from './screens/ViewImagescreen';
import WelcomeScreen from './screens/WelcomeScreen';
//import WelcomeScreen from './screens/WelcomeScreen';


export default function App() {
  return (
<WelcomeScreen></WelcomeScreen>

  );
}

const styles = StyleSheet.create({
  container: {
   
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  image:{
   
    
    
  }
});
