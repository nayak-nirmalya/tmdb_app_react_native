import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Navbar from './Navbar';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = React.memo(() => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          header: () => <Navbar main />,
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
      <Stack.Screen
        options={{
          headerTransparent: true,
          header: () => <Navbar />,
        }}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
});

export default MainNavigation;
