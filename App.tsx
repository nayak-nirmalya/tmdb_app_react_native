import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import Home from './screens/Home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return <Home />;
}

const styles = StyleSheet.create({});

export default App;
