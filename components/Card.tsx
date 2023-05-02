import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { Movie } from '../types';

type CardProps = {
  item: Movie;
};

const placeholderImage = require('../assets/images/placeholder_image.png');

const Card = React.memo(({ item }: CardProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        // source={{
        //   uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        // }}
        source={placeholderImage}
      />
    </TouchableOpacity>
  );
});

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 14,
  },
});
