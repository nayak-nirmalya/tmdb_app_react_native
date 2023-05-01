import axios from 'axios';
import type { PropsWithChildren } from 'react';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native';

import { TMDB_API_KEY } from '@env';
import { Movie } from './types';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export type MoviesResponse = {
  results: Movie[];
};

const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
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
