import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';
import { Movie, TV } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';

export type SearchScreenProps = {
  searchResult?: Movie | TV;
};

type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search = ({ route, navigation }: SearchProps): JSX.Element => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>SearchScreen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({});
