import { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import ClienteService from './ClienteService';

export default function ClienteLista({ navigation }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', listarClientes);
    return unsubscribe;
  }, [navigation]);

  async function listarClientes() {
    const data = await ClienteService.listar();
    setClientes(data);
  }

  async function excluir(id) {
    await ClienteService.remover(id);
    listarClientes();
    alert('Cliente excluído!');
  }

  return (
    <View>
      <Button mode="contained" icon="plus" onPress={() => navigation.navigate('ClienteForm')}>
        Novo Cliente
      </Button>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>Nome: {item.nome}</Text>
              <Text>CPF: {item.cpf}</Text>
              <Text>Telefone: {item.telefone}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Endereço: {item.endereco}</Text>
            </Card.Content>
            <Card.Actions>
              <Button icon="pencil" onPress={() => navigation.navigate('ClienteForm', item)} />
              <Button icon="delete" onPress={() => excluir(item.id)} />
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ card: { margin: 10 } });
