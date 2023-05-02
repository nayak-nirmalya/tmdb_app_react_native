import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import { Movie } from '../types';

type CardProps = {
  item: Movie;
};

const Card = React.memo(({ item }: CardProps): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text>{item.original_language}</Text>
    </TouchableOpacity>
  );
});

export default Card;

const styles = StyleSheet.create({});
