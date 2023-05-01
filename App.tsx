import type { PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native';

import { Movie } from './types';
import { getPopularMovies, getUpcomingMovies } from './services/services';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
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
        {movie?.original_title}
      </Text>
      <Text className="text-black font-bold text-lg items-center mx-auto justify-center">
        {movie?.overview}
      </Text>
      <Text className="text-black font-bold text-lg items-center mx-auto justify-center">
        {movie?.release_date}
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
