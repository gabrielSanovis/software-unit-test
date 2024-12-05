/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/screens/Login';
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src/router/main';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
