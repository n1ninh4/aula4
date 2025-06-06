import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

export default function RastreamentoStatus() {
  const statusPedido = [
    'Pedido recebido',
    'Em separação',
    'Em rota',
    'Entregue',
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.titulo}>Status do Pedido</Title>
      {statusPedido.map((status, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Text style={styles.statusTexto}>{status}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  statusTexto: {
    fontSize: 18,
  },
});
