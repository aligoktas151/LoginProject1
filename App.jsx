import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Navigation import
import Router from './src/navigation/Router';

const App = () => {
  return (
    <NavigationContainer>
        <Router />
    </NavigationContainer>
  );
};

export default App;
