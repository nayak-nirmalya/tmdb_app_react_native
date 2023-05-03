import { StyleSheet, Text, View } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import React from 'react';

const Video = () => {
  return (
    <VideoPlayer
      source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
      onBack={() => videoShown()}
      navigator={navigation}
    />
  );
};

export default Video;

const styles = StyleSheet.create({});
