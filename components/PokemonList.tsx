import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemon } from '../utils/fetchPokemon';

export default function PokemonListScreen() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: ({ pageParam = 0 }) => fetchPokemon({ pageParam }),
    getNextPageParam: (lastPage) => {
      // This line of code extracts the next page offset from the 'next' URL in the lastPage object.
      // If 'next' is present, it splits the URL to extract the offset value.
      // The offset value is then parsed to an integer and returned.
      // If 'next' is not present, it returns undefined.
      return lastPage.next ? parseInt(lastPage.next.split('offset=')[1].split('&')[0]) : undefined;
    },
    initialPageParam: 0,
  });

  const pokemonList = data?.pages.flatMap((page) => page.results) ?? [];

  const renderItem = ({ item }: {item: {name: string}}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return <ActivityIndicator style={styles.footer} />;
  };

  return (
    <View style={styles.container}>
      {status === 'pending' ? (
        <ActivityIndicator size="large" color="#eee" />
      ) : (
        <FlatList
          data={pokemonList}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          onEndReached={() => {
            if (hasNextPage) fetchNextPage();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  footer: {
    margin: 20,
  },
});
