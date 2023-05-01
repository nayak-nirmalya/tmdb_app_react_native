import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { getPopularTVs } from '../services/services';
import { Movie, TV } from '../types';

const Home = (): JSX.Element => {
  const [movie, setMovie] = useState<Movie | TV | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularTVs()
      .then((movies) => {
        setMovie(movies[0]);
      })
      .catch((err) => {
        console.error(err);
        setError(!!err);
      });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-black text-4xl">Hello World!</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
