import React from 'react';
import type { PropsWithChildren } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import Home from './screens/Home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
