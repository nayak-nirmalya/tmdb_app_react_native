import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

export type SearchScreenProps = {
  movieId: string;
};

type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({ route, navigation }: SearchProps): JSX.Element => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
