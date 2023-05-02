import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Movie, TV } from '../types';
import { RootStackParamList } from '../App';
import Error from '../components/Error';
import { getMovie } from '../services/services';

export type DetailsScreenProps = {
  item: Movie | TV;
};

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route, navigation }: DetailsProps): JSX.Element => {
  const { item } = route.params;

  const [details, setDetails] = useState<Movie>();
  const [error, setError] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(item.id.toString())
      .then((data) => setDetails(data))
      .catch(() => setError(true))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {loaded && !error && (
        <SafeAreaView>
          <Text className="text-black">{details?.title || 'Not A Movie!'}</Text>
        </SafeAreaView>
      )}
      {!loaded && (
        <ActivityIndicator
          className="items-center justify-center my-auto"
          size="large"
          color="#00ff00"
        />
      )}
      {error && <Error />}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
