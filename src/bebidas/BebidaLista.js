import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import BebidaService from './BebidaService';

export default function BebidaLista({ navigation }) {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', listarBebidas);
    return unsubscribe;
  }, [navigation]);

  async function listarBebidas() {
    const data = await BebidaService.listar();
    setBebidas(data);
  }

  async function excluir(id) {
    await BebidaService.remover(id);
    listarBebidas();
    alert('Bebida excluída.');
  }

  return (
    <View>
      <Button mode="contained" icon="plus" onPress={() => navigation.navigate('BebidaForm')}>
        Nova Bebida
      </Button>
      <FlatList
        data={bebidas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>Nome: {item.nome}</Text>
              <Text>Preço: {item.preco}</Text>
              <Text>Estoque: {item.estoque}</Text>
              <Text>Categoria: {item.categoria}</Text>
            </Card.Content>
            <Card.Actions>
              <Button icon="pencil" onPress={() => navigation.navigate('BebidaForm', item)} />
              <Button icon="delete" onPress={() => excluir(item.id)} />
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ card: { margin: 10 } });
