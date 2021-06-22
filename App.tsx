import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { SignIn } from './src/screens/SignIn';
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  // Segura a tela de splash enquanto as fonts carregam
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (<>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <SignIn />
  </>
  );
}