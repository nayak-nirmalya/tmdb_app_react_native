import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

import {
  getPopularMovies,
  getPopularTVs,
  getUpcomingMovies,
} from '../services/services';
import { Movie, TV } from '../types';
import List from '../components/List';

const dimensions = Dimensions.get('screen');

const Home = (): JSX.Element => {
  const [error, setError] = useState(false);
  const [moviesImages, setMoviesImages] = useState<string[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [popularTVs, setPopularTVs] = useState<TV[]>([]);

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
      .then((movies) => {
        setPopularMovies(movies);
      })
      .catch((err) => {
        console.error(err);
        setError(!!err);
      });

    getPopularTVs()
      .then((tvs) => {
        setPopularTVs(tvs);
      })
      .catch((err) => {
        console.error(err);
        setError(!!err);
      });
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 justify-center items-center">
          <StatusBar translucent backgroundColor="transparent" />
          <SliderBox
            images={moviesImages}
            dotStyle={{ height: 0 }}
            sliderBoxHeight={dimensions.height / 1.5}
            autoplay
            circleLoop
          />
        </View>

        <View style={styles.carousel}>
          <List title="Popular Movies" content={popularMovies} />
        </View>

        <View style={styles.carousel}>
          <List title="Popular TVs" content={popularTVs} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
