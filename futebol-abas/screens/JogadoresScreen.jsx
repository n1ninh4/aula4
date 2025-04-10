import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { List, Title } from 'react-native-paper';

const jogadores = [
  {
    nome: 'Gerson',
    numero: 8,
    imagem: 'https://i.pinimg.com/474x/4e/8a/70/4e8a706c9f8ec7a968089abbd329ef89.jpg'
  },
  {
    nome: 'Arrascaeta',
    numero: 14,
    imagem: 'https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg'
  },
  {
    nome: 'Bruno Henrique',
    numero: 27,
    imagem: 'https://i.pinimg.com/474x/c5/12/48/c5124808b3c3d8dcffd37409a54e629d.jpg'
  },
  {
    nome: 'Erick Pulgar',
    numero: 5,
    imagem: 'https://i.pinimg.com/474x/e8/34/b6/e834b6e34ec15daa8658cae785b71827.jpg'
  },
  {
    nome: 'Pedro',
    numero: 21,
    imagem: 'https://i.pinimg.com/236x/e5/12/65/e512656f3b2aba63aa1e313df0fdbb85.jpg'
  },
];

const JogadoresScreen = () => {
  return (
    <View style={styles.container}>
      <Title style={{ color: 'white' }}>Jogadores</Title>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={`${item.nome} (camisa ${item.numero})`}
            titleStyle={{ color: 'white' }}
            left={() => <Image source={{ uri: item.imagem }} style={styles.imagem} />}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0a0a0a',
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
});

export default JogadoresScreen;