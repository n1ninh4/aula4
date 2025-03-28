// componentes/Serie.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Serie({ nome, ano, diretor, temporadas, capa }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.title}>{nome} ({ano})</Text>
      <Text>Diretor: {diretor}</Text>
      <Text>Temporadas: {temporadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#DCDCDC', 
      borderRadius: 15,
      alignItems: 'center'
  },
  image: {
    width: 250,
    height: 400,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});