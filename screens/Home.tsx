import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  getDocumentaries,
  getFamilyMovies,
  getPopularMovies,
  getPopularTVs,
  getUpcomingMovies,
} from '../services/services';
import { Movie, TV } from '../types';
import List from '../components/List';
import Error from '../components/Error';
import { RootStackParamList } from '../App';

const dimensions = Dimensions.get('screen');

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>): JSX.Element => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [moviesImages, setMoviesImages] = useState<string[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [familyMovies, setFamilyMovies] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);
  const [popularTVs, setPopularTVs] = useState<TV[]>([]);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getFamilyMovies(),
      getDocumentaries(),
      getPopularTVs(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          familyMoviesData,
          documentariesData,
          popularTVsData,
        ]) => {
          setMoviesImages(
            upcomingMoviesData.map(
              (movie) => 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            )
          );

          setPopularMovies(popularMoviesData);
          setFamilyMovies(familyMoviesData);
          setDocumentaries(documentariesData);
          setPopularTVs(popularTVsData);
        }
      )
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {loaded && !error && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {moviesImages && (
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
          )}

          {popularMovies && (
            <View style={styles.carousel}>
              <List title="Popular Movies" content={popularMovies} />
            </View>
          )}

          {familyMovies && (
            <View style={styles.carousel}>
              <List title="Family Movies" content={familyMovies} />
            </View>
          )}

          {documentaries && (
            <View style={styles.carousel}>
              <List title="Documentaries" content={documentaries} />
            </View>
          )}

          {popularTVs && (
            <View style={styles.carousel}>
              <List title="Popular TVs" content={popularTVs} />
            </View>
          )}
        </ScrollView>
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

export default Home;
