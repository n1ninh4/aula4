import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button, Card, Text, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE_PEDIDOS = '@pedidos';

export default function PedidoLista({ navigation }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', listarPedidos);
    return unsubscribe;
  }, [navigation]);

  async function listarPedidos() {
    const json = await AsyncStorage.getItem(CHAVE_PEDIDOS);
    const data = json ? JSON.parse(json) : [];
    setPedidos(data);
  }

  async function excluir(id) {
    const json = await AsyncStorage.getItem(CHAVE_PEDIDOS);
    const data = json ? JSON.parse(json) : [];
    const filtrados = data.filter((p) => p.id !== id);
    await AsyncStorage.setItem(CHAVE_PEDIDOS, JSON.stringify(filtrados));
    listarPedidos();
    alert('Pedido excluído!');
  }

  return (
    <View>
      <Button
        mode="contained"
        icon="plus"
        onPress={() => navigation.navigate('PedidoForm')}
        style={{ margin: 10 }}
      >
        Novo Pedido
      </Button>

      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={`Pedido #${item.id}`} subtitle={`Cliente: ${item.cliente}`} />
            <Card.Content>
              <Text>Bebida: {item.bebida}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
              <Text>Endereço: {item.enderecoEntrega}</Text>
              <Text>Pago: {item.pago ? 'Sim' : 'Não'}</Text>
              <Text>Data: {new Date(item.data).toLocaleDateString()}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon="pencil" onPress={() => navigation.navigate('PedidoForm', item)} />
              <IconButton icon="delete" onPress={() => excluir(item.id)} />
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { margin: 10 },
});
