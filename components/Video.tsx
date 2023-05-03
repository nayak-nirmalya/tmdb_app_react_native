import React from 'react';
import VideoPlayer from 'react-native-video-controls';

type VideoProps = {
  videoShown: () => void;
};

const Video = ({ videoShown }: VideoProps) => {
  return (
    <VideoPlayer
      source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
      onBack={videoShown}
      onEnd={videoShown}
    />
  );
};

export default Video;
