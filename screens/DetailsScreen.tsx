import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DetailsScreenProps {
  route: {
    params: {
      pokemon: {
        name: string;
        url: string;
      };
    };
  };
}

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokemon.name}</Text>
      <Text style={styles.url}>URL: {pokemon.url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  url: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
});
