import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../themes/Colors';

type PlayProps = {
  handlePress: () => void;
};

const PlayButton = React.memo(({ handlePress }: PlayProps): JSX.Element => {
  return (
    <Pressable
      onPress={() => handlePress()}
      style={styles.color}
      className="items-center rounded-full p-2"
    >
      <Icon name="caret-forward-outline" color={Colors.white} size={36} />
    </Pressable>
  );
});

export default PlayButton;

const styles = StyleSheet.create({
  color: {
    backgroundColor: Colors.primary,
  },
});
