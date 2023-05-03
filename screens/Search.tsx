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
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { Movie, TV } from '../types';
import { searchMovieOrTV } from '../services/services';
import Card from '../components/Card';
import Error from '../components/Error';

const Search = (): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState<(Movie | TV)[]>([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onSubmit = (query: string) => {
    Promise.all([searchMovieOrTV(query, 'movie'), searchMovieOrTV(query, 'tv')])
      .then(([movies, tvs]) => {
        const data = [...movies, ...tvs];
        setSearchResult(data);
      })
      .catch((err) => setError(true))
      .finally(() => {
        setLoaded(true);
        Keyboard.dismiss();
      });
  };

  return (
    <>
      <SafeAreaView>
        <View className="mt-16 flex-row">
          <View style={styles.form} className="pb-4">
            <TextInput
              className="rounded-lg px-2 mx-3"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={() => onSubmit(searchText)}
              style={styles.input}
              placeholder="Search Movie / TV Show"
            />
          </View>

          <TouchableOpacity
            className="mr-3 mt-2"
            onPress={() => onSubmit(searchText)}
          >
            <Icon style={styles.icon} name="search-outline" size={34} />
          </TouchableOpacity>
        </View>

        <View className="items-center" style={styles.searchItems}>
          {loaded && searchResult && searchResult.length > 0 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={searchResult}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          )}

          {loaded && searchResult && searchResult.length == 0 && (
            <View className="items-center mx-auto mt-40">
              <Text className="text-black font-semibold">
                No Matching Result.
              </Text>
              <Text className="text-black font-semibold">
                Try Different Keyword.
              </Text>
            </View>
          )}

          {!searchText && (
            <View style={styles.empty}>
              <Text className="text-black text-lg items-center mx-auto mt-40">
                Type Something to Start Searching.
              </Text>
            </View>
          )}

          {error && <Error />}
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
  },
  icon: {},
  searchItems: {},
  empty: {},
});
