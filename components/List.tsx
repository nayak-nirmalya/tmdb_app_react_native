import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Movie, TV } from '../types';
import Card from './Card';

export type ListProps = {
  title: string;
  content?: Movie[] | TV[];
};

const List = React.memo(({ title, content }: ListProps): JSX.Element => {
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList<Movie | TV>
          horizontal
          data={content}
          renderItem={({ item }) => <Card key={item.id} item={item} />}
        />
      </View>
    </View>
  );
});

export default List;

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
