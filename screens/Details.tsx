import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Movie, TV } from '../types';
import { RootStackParamList } from '../App';
import Error from '../components/Error';
import { getMovieOrTvById } from '../services/services';
import PlayButton from '../components/PlayButton';
import Video from '../components/Video';

export type DetailsScreenProps = {
  id: string;
};

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const placeholderImage = require('../assets/images/placeholder_image.png');
const Height = Dimensions.get('screen').height;

const Details = ({ route, navigation }: DetailsProps): JSX.Element => {
  const { id } = route.params;

  const [movieDetails, setMovieDetails] = useState<Movie>();
  const [tvDetails, setTvDetails] = useState<TV>();
  const [error, setError] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const promises = [
      getMovieOrTvById(id, 'movie').catch(() => null),
      getMovieOrTvById(id, 'tv').catch(() => null),
    ];

    (async () => {
      const results = await Promise.all(promises);

      if (!results[0] && !results[1]) setError(true);

      results[0]
        ? setMovieDetails(results[0] as Movie)
        : setTvDetails(results[1] as TV);

      setLoaded(true);
    })();
  }, [id]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {loaded && !error && (
        <View>
          <ScrollView>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={
                movieDetails?.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetails.poster_path,
                    }
                  : tvDetails?.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        tvDetails.poster_path,
                    }
                  : placeholderImage
              }
            />
            <View style={styles.container}>
              <View className="absolute z-10 -top-10 right-4">
                <PlayButton handlePress={videoShown} />
              </View>

              <Text style={styles.title} className="text-black">
                {movieDetails?.title || tvDetails?.original_name}
              </Text>

              {movieDetails?.genres && (
                <View style={styles.genresContainer}>
                  {movieDetails.genres?.map((genre) => (
                    <Text
                      className="text-black font-semibold mr-2"
                      key={genre.id}
                    >
                      {genre.name}
                    </Text>
                  ))}
                </View>
              )}

              {tvDetails?.genres && (
                <View style={styles.genresContainer}>
                  {tvDetails.genres?.map((genre) => (
                    <Text
                      className="text-black font-semibold mr-2"
                      key={genre.id}
                    >
                      {genre.name}
                    </Text>
                  ))}
                </View>
              )}

              {movieDetails?.vote_average && (
                <StarRating
                  disabled
                  maxStars={5}
                  fullStarColor="gold"
                  starSize={30}
                  rating={movieDetails.vote_average / 2}
                />
              )}

              {tvDetails?.vote_average && (
                <StarRating
                  disabled
                  maxStars={5}
                  fullStarColor="gold"
                  starSize={30}
                  rating={tvDetails.vote_average / 2}
                />
              )}

              <Text className="text-black text-justify" style={styles.overview}>
                {movieDetails?.overview || tvDetails?.overview}
              </Text>

              <Text className="text-black pb-4" style={styles.date}>
                {movieDetails &&
                  'Release Date: ' +
                    dateFormat(movieDetails?.release_date, 'mmmm dS, yyyy')}

                {tvDetails &&
                  'First Air Date: ' +
                    dateFormat(tvDetails?.first_air_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>

          <Modal
            statusBarTranslucent
            visible={modalVisible}
            animationType="slide"
            supportedOrientations={['landscape', 'portrait']}
          >
            <View className="flex-1 justify-center align-middle">
              <Video videoShown={videoShown} />
            </View>
          </Modal>
        </View>
      )}
      {!loaded && (
        <ActivityIndicator
          className="items-center justify-center my-auto"
          size="large"
          color="#00ff00"
        />
      )}
      {error && <Error errText="No Such Movie or TV Shows Exists!" />}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Height * (2 / 3),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
  },
  overview: {
    padding: 15,
  },
  date: { fontWeight: 'bold' },
});
