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
};

export default Home;

const styles = StyleSheet.create({});
