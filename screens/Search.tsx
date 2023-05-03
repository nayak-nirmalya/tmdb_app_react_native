import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootStackParamList } from '../App';
import { Movie, TV } from '../types';

export type SearchScreenProps = {
  searchResult?: Movie | TV;
};

type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({ route, navigation }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('');

  return (
    <>
      <SafeAreaView>
        <View>
          <TextInput
            className="mt-52"
            value={search}
            onChangeText={setSearch}
            style={styles.input}
            placeholder="Search Movie / TV"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
