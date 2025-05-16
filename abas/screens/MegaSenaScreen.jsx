import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    const jogo = numeros.sort((a, b) => a - b).join(' - ');
    setJogosMegaSena([jogo, ...jogosMegaSena]);
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={gerarJogo} style={styles.button}>
        Gerar Jogo da Mega Sena
      </Button>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ecf9f1' },
  button: { backgroundColor: '#1abc9c', marginBottom: 10 },
  item: { fontSize: 18, marginBottom: 5, color: '#2c3e50' },
});
