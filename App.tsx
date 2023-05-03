import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DetailsScreenProps } from './screens/Details';
import MainNavigation from './components/MainNavigation';

export type RootStackParamList = {
  Home: undefined;
  Details: DetailsScreenProps;
  Search: undefined;
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
