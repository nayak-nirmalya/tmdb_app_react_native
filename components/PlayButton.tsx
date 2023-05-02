import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const PlayButton = React.memo(() => {
  return (
    <Pressable>
      <Text>Languda Khandi</Text>
    </Pressable>
  );
});

export default PlayButton;

const styles = StyleSheet.create({});
