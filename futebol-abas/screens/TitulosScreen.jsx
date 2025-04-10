import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Title, List } from 'react-native-paper';

const titulos = [
  { nome: "Campeonato Brasileiro", anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020] },
  { nome: "Copa Libertadores da América", anos: [1981, 2019, 2022] },
  { nome: "Copa do Brasil", anos: [1990, 2006, 2013, 2022, 2024] },
  { nome: "Supercopa do Brasil", anos: [2020, 2021, 2025] },
];

const TitulosScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Títulos</Title>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <List.Accordion title={item.nome}>
            <List.Item title={`Anos: ${item.anos.join(', ')}`} />
          </List.Accordion>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TitulosScreen;