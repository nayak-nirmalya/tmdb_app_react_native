import { Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayButton = React.memo(() => {
  return (
    <Pressable className="items-center rounded-full p-2 bg-[#4481fc]">
      <Icon name="caret-forward-outline" color="#fff" size={36} />
    </Pressable>
  );
});

export default PlayButton;
