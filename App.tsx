import React from 'react';
import type { PropsWithChildren } from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Details, { DetailsScreenProps } from './screens/Details';
import Navbar from './components/Navbar';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export type RootStackParamList = {
  Home: undefined;
  Details: DetailsScreenProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            header: () => <Navbar />,
          }}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
