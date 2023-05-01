import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

import {
  getPopularMovies,
  getPopularTVs,
  getUpcomingMovies,
} from '../services/services';
import { Movie, TV } from '../types';

const dimensions = Dimensions.get('screen');

const Home = (): JSX.Element => {
  const [error, setError] = useState(false);
  const [moviesImages, setMoviesImages] = useState<string[]>([]);

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
        const moviesImagesArray: string[] = [];
        movies.forEach((movie) => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch((err) => {
        console.error(err);
        setError(!!err);
      });

    getPopularMovies()
      .then((movies) => {})
      .catch((err) => {
        console.error(err);
        setError(!!err);
      });
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar translucent backgroundColor="transparent" />
      <SliderBox
        images={moviesImages}
        sliderBoxHeight={dimensions.height / 1.5}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
