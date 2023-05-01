import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

import Home from './screens/Home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
