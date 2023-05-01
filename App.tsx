import type { PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native';

import { Movie, TV } from './types';
import {
  getPopularMovies,
  getPopularTVs,
  getUpcomingMovies,
} from './services/services';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [movie, setMovie] = useState<Movie | TV | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularTVs()
      .then((movies) => {
        console.log(movies[0]);
        setMovie(movies[0]);
      })
      .catch((err) => {
        console.error(err);
        setError(!!err);
      });
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <Text className="text-black font-bold text-lg items-center mx-auto justify-center">
        {movie?.original_title || movie?.original_name}
      </Text>
      <Text className="text-black font-bold text-lg items-center mx-auto justify-center">
        {movie?.overview}
      </Text>
      <Text className="text-black font-bold text-lg items-center mx-auto justify-center">
        {movie?.release_date || movie?.first_air_date}
      </Text>
      <Text className="text-black font-bold text-lg items-center mx-auto justify-center">
        {movie?.vote_average}
      </Text>
      {error && (
        <Text className="text-red-500 font-bold text-lg items-center mx-auto justify-center">
          Error
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
