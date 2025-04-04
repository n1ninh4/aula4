import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Jogador from './Jogador';

export default function Time(props) {
    const {nome, anoFundacao, mascote, imagem, jogadores} = props
  return (
    <Card style={styles.card}>
      <Card.Title title={nome} subtitle={'Fundado em ${anoFundacao} - Mascote: ${mascote}'} />
      <Card.Cover source={{ uri: imagem }} />
      <Card.Content>
        <Title>Jogadores:</Title>
        <FlatList
          data={jogadores}
          horizontal
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => <Jogador {...item} />}
          showsHorizontalScrollIndicator={false}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});