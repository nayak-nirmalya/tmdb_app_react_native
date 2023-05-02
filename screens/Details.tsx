import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Movie, TV } from '../types';
import { RootStackParamList } from '../App';
import { getMovie } from '../services/services';

export type DetailsScreenProps = {
  item: Movie | TV;
};

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route, navigation }: DetailsProps): JSX.Element => {
  const { item } = route.params;

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    getMovie(item.id.toString())
      .then((movie) => console.log(JSON.stringify(movie, null, 2)))
      .catch();
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-black">
        {(item as Movie).title || (item as TV).name}
      </Text>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
