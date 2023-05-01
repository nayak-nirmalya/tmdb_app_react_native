import axios from 'axios';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native';

import { TMDB_API_KEY } from '@env';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const getPopularMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [movie, setMovie] = useState<Movie | null>(null);

  const data = getPopularMovies().then((movies) => {
    setMovie(movies[0]);
  });

  return (
    <SafeAreaView className="h-full bg-white">
      <Text className="text-black font-bold text-lg items-center mx-auto justify-center">
        {movie?.original_title}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
