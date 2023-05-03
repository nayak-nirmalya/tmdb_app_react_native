import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DetailsScreenProps } from './screens/Details';
import MainNavigation from './components/MainNavigation';
import { SearchScreenProps } from './screens/Search';

export type RootStackParamList = {
  Home: undefined;
  Details: DetailsScreenProps;
  Search: SearchScreenProps;
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
