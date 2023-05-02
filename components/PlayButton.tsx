import { Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type PlayProps = {
  handlePress: () => void;
};

const PlayButton = React.memo(({ handlePress }: PlayProps): JSX.Element => {
  return (
    <Pressable
      onPress={() => handlePress()}
      className="items-center rounded-full p-2 bg-[#4481fc]"
    >
      <Icon name="caret-forward-outline" color="#fff" size={36} />
    </Pressable>
  );
});

export default PlayButton;
