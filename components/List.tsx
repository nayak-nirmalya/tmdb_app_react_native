import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Movie } from '../types';

export type ListProps = {
  title: string;
  content?: Movie[];
};

const List = ({ title, content }: ListProps) => {
  return (
    <View>
      <FlatList
        horizontal
        data={content}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
