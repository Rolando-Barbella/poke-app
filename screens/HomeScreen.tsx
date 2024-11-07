import React from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemon } from '../utils/fetchPokemon';

export default function HomeScreen({ navigation }: { navigation: any }) {  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: ({ pageParam = 0 }) => fetchPokemon({ pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.next ? parseInt(lastPage.next.split('offset=')[1].split('&')[0]) : undefined;
    },
    initialPageParam: 0,
  });

  const pokemonList = data?.pages.flatMap((page) => page.results) ?? [];

  const renderItem = ({ item }: {item: {name: string}}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { pokemon: item })}
      style={styles.touchable}
    >
      <Text style={{ fontSize: 16 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return <ActivityIndicator style={styles.footer} />;
  };

  return (
    <View style={styles.container}>
      {status === 'pending' ? (
        <ActivityIndicator size="large" color="#eee" />
      ) : status === 'error' ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {'An error occurred while fetching Pokemon'}
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => fetchNextPage()}
          >
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
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
  touchable: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  retryText: {
    color: 'white',
    fontSize: 16,
  },
});
