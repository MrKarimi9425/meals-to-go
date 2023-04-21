import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation';
import 'react-native-gesture-handler';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { initializeApp, getApps } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native"
import React, { useEffect, useState } from 'react';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDNT62CyQps0ZM_RlCkObiQfsndxAJrRVc",
  authDomain: "mealstogo-68a30.firebaseapp.com",
  projectId: "mealstogo-68a30",
  storageBucket: "mealstogo-68a30.appspot.com",
  messagingSenderId: "664401678697",
  appId: "1:664401678697:web:1efcf53aa455417d3badf8"
};
if (getApps().length == 0) {
  const app = initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

export default function App() {
  let [oswald] = useOswald({
    Oswald_400Regular
  });
  let [lato] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!oswald || !lato) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
              <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
} 