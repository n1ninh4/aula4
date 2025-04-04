import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function Jogador(props) {

    const {nome, numero, imagem} = props

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imagem }} style={styles.image} />
      <Card.Content>
        <Text variant="labelLarge">{nome}</Text>
        <Text variant="bodySmall">Camisa {numero}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 10,
  },
  image: {
    height: 120,
  },
});