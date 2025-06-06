import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE_PEDIDOS = '@pedidos';

export default function PedidoForm({ navigation, route }) {
  const pedidoAntigo = route.params || {};
  const [cliente, setCliente] = useState(pedidoAntigo.cliente || '');
  const [bebida, setBebida] = useState(pedidoAntigo.bebida || '');
  const [quantidade, setQuantidade] = useState(pedidoAntigo.quantidade ? String(pedidoAntigo.quantidade) : '1');
  const [enderecoEntrega, setEnderecoEntrega] = useState(pedidoAntigo.enderecoEntrega || '');
  const [pago, setPago] = useState(pedidoAntigo.pago || false);

  // Validação simples
  function validar() {
    if (!cliente || !bebida || !quantidade || !enderecoEntrega) {
      alert('Preencha todos os campos!');
      return false;
    }
    if (isNaN(quantidade) || Number(quantidade) <= 0) {
      alert('Quantidade inválida!');
      return false;
    }
    return true;
  }

  async function salvar() {
    if (!validar()) return;

    const pedido = {
      id: pedidoAntigo.id || new Date().getTime(),
      cliente,
      bebida,
      quantidade: Number(quantidade),
      enderecoEntrega,
      pago,
      data: pedidoAntigo.data || new Date().toISOString(),
    };

    try {
      const json = await AsyncStorage.getItem(CHAVE_PEDIDOS);
      const pedidos = json ? JSON.parse(json) : [];

      const index = pedidos.findIndex((p) => p.id === pedido.id);
      if (index >= 0) {
        pedidos[index] = pedido;
      } else {
        pedidos.push(pedido);
      }

      await AsyncStorage.setItem(CHAVE_PEDIDOS, JSON.stringify(pedidos));
      alert('Pedido salvo com sucesso!');
      navigation.navigate('Pedidos');
    } catch (error) {
      alert('Erro ao salvar o pedido');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Cadastro de Pedido</Text>

      <TextInput label="Cliente" value={cliente} onChangeText={setCliente} mode="outlined" style={styles.input} />
      <TextInput label="Bebida" value={bebida} onChangeText={setBebida} mode="outlined" style={styles.input} />
      <TextInput
        label="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput label="Endereço de Entrega" value={enderecoEntrega} onChangeText={setEnderecoEntrega} mode="outlined" style={styles.input} />

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={pago ? 'checked' : 'unchecked'}
          onPress={() => setPago(!pago)}
        />
        <Text style={{ marginTop: 8 }}>Pagamento efetuado?</Text>
      </View>

      <Button mode="contained" onPress={salvar} icon="content-save" style={styles.botaoSalvar}>
        Salvar Pedido
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { marginBottom: 20, textAlign: 'center' },
  input: { marginBottom: 15 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  botaoSalvar: { marginTop: 10 },
});
