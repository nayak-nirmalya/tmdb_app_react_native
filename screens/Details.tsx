import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Movie, TV } from '../types';
import { RootStackParamList } from '../App';

export type DetailsScreenProps = {
  item: Movie | TV;
};

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route, navigation }: DetailsProps): JSX.Element => {
  const { item } = route.params;

  return (
    <SafeAreaView>
      <Text className="text-black">
        {(item as Movie).title || (item as TV).name}
      </Text>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
