import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { Movie, TV } from '../types';
import { useNavigation } from '@react-navigation/native';

type CardProps = {
  item: Movie | TV;
};

const placeholderImage = require('../assets/images/placeholder_image.png');

const Card = React.memo(({ item }: CardProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mb-2"
      style={styles.container}
      onPress={() => navigation.navigate('Details', { id: item.id.toString() })}
    >
      <Image
        style={styles.image}
        resizeMode="cover"
        source={
          item.poster_path
            ? { uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }
            : placeholderImage
        }
      />
      {!item.poster_path && (
        <Text
          style={styles.movieName}
          className="text-black font-semibold mt-4"
        >
          {(item as Movie).title || (item as TV).name}
        </Text>
      )}
    </TouchableOpacity>
  );
});

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 14,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    textAlign: 'center',
  },
});
