import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '../App';
import { Movie, TV } from '../types';
import { searchMovieOrTV } from '../services/services';
import Card from '../components/Card';

export type SearchScreenProps = {
  searchResult?: Movie | TV;
};

type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({ route, navigation }: SearchProps): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState<Movie[]>([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onSubmit = (query: string) => {
    searchMovieOrTV(query, 'movie')
      .then((result) => setSearchResult(result as Movie[]))
      .catch((err) => setError(true))
      .finally(() => {
        setLoaded(true);
        Keyboard.dismiss();
      });
  };

  return (
    <>
      <SafeAreaView>
        <View className="mt-12 flex-row items-center">
          <View style={styles.form}>
            <TextInput
              className="rounded-lg px-2 mx-3"
              value={searchText}
              onChangeText={setSearchText}
              style={styles.input}
              placeholder="Search Movie / TV Show"
            />
          </View>

          <TouchableOpacity
            className="mr-3"
            onPress={() => onSubmit(searchText)}
          >
            <Icon name="search-outline" size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchItems}>
          {loaded && searchResult && searchResult.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResult}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          )}

          {loaded && searchResult && searchResult.length == 0 && (
            <View>
              <Text>No Matching Result.</Text>
              <Text>Try Different Keyword.</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 0.5,
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    // paddingRight: 8,
  },
  searchItems: {},
});
