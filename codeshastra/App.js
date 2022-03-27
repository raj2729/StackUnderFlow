import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import AuthProvider from './src/auth/AuthProvider';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/controllers/Navigator';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'RobotoCondensed-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'RobotoCondensed-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'RobotoCondensed-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'RobotoCondensed-Light',
      fontWeight: 'normal',
    },
  },
};
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E5890A" />
      <AuthProvider>
        <PaperProvider
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              primary: '#9D5C0D',
              secondary: '#E5890A',
              accent: '#F5B400',
              disabled: '#FF7CC3',
              error: '#F14F0A',
              backgroundLight: 'white',
              text: '#3C3C3C',
              textBefore: '#F4F4F4',
              textAfter: '#7D7D7D',
              border: '#F7D08A',
            },
            fonts: configureFonts(fontConfig),
          }}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
  },
});
