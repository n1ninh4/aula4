// componentes/Filme.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Filme({ nome, ano, diretor, tipo, capa }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.title}>{nome} ({ano})</Text>
      <Text>Diretor: {diretor}</Text>
      <Text>Gênero: {tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#DCDCDC',
    borderRadius: 15,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 400,
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});