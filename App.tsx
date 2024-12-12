import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src/router/main';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
