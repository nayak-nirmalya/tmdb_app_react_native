import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Movie, TV } from '../types';
import { RootStackParamList } from '../App';
import Error from '../components/Error';
import { getMovie } from '../services/services';

export type DetailsScreenProps = {
  movieId: string;
};

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const placeholderImage = require('../assets/images/placeholder_image.png');
const Height = Dimensions.get('screen').height;

const Details = ({ route, navigation }: DetailsProps): JSX.Element => {
  const { movieId } = route.params;

  const [details, setDetails] = useState<Movie>();
  const [error, setError] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId)
      .then((data) => setDetails(data))
      .catch(() => setError(true))
      .finally(() => setLoaded(true));
  }, [movieId]);

  return (
    <>
      {loaded && !error && (
        <ScrollView>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={
              details?.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' + details.poster_path,
                  }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <Text style={styles.title} className="text-black">
              {details?.title || 'Not A Movie!'}
            </Text>

            {details?.genres && (
              <View style={styles.genresContainer}>
                {details.genres.map((genre) => (
                  <Text
                    className="text-black font-semibold mr-2"
                    key={genre.id}
                  >
                    {genre.name}
                  </Text>
                ))}
              </View>
            )}
            <Text className="text-black font-semibold">
              {details?.vote_average}
            </Text>
          </View>
        </ScrollView>
      )}
      {!loaded && (
        <ActivityIndicator
          className="items-center justify-center my-auto"
          size="large"
          color="#00ff00"
        />
      )}
      {error && <Error errText="No Movie Exists with Given ID!" />}
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
    height: Height / 2,
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
    alignContent: 'center',
  },
});
