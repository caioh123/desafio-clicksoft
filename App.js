import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {MyTabs} from './src/routes/index'
import {useFonts, Jost_400Regular, Jost_700Bold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import theme from './src/styles/theme'
import {AuthProvider} from './src/context/context'


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </AuthProvider>
  );
}

