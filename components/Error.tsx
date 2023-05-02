import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type ErrorProps = {
  errSubject: string;
  errText: string;
};

const Error = React.memo(({ errSubject, errText }: ErrorProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{errSubject}</Text>
      <Text style={styles.text}>{errText}</Text>
    </View>
  );
});

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
