import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Movie, TV } from '../types';
import { RootStackParamList } from '../App';
import Error from '../components/Error';
import { getMovie } from '../services/services';
import PlayButton from '../components/PlayButton';
import Video from '../components/Video';

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
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieId)
      .then((data) => setDetails(data))
      .catch(() => setError(true))
      .finally(() => setLoaded(true));
  }, [movieId]);

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
                details?.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' + details.poster_path,
                    }
                  : placeholderImage
              }
            />
            <View style={styles.container}>
              <View className="absolute z-10 -top-10 right-4">
                <PlayButton handlePress={videoShown} />
              </View>

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
              {details?.vote_average && (
                <StarRating
                  disabled
                  maxStars={5}
                  fullStarColor="gold"
                  starSize={30}
                  rating={details.vote_average / 2}
                />
              )}
              <Text className="text-black text-justify" style={styles.overview}>
                {details?.overview}
              </Text>
              <Text className="text-black" style={styles.date}>
                {'Release Date: ' +
                  dateFormat(details?.release_date, 'mmmm dS, yyyy')}
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
    marginBottom: 20,
    alignContent: 'center',
  },
  overview: {
    padding: 15,
  },
  date: { fontWeight: 'bold' },
});
