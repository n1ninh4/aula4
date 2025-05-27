import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Button } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Erro ao carregar produto:', error));
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: product.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>{product.title}</Text>
          <Text variant="bodyMedium" style={styles.description}>{product.description}</Text>
          <Text variant="titleMedium" style={styles.price}>R$ {product.price}</Text>
          <Text variant="bodyMedium">Categoria: {product.category}</Text>
          <Text variant="bodyMedium">Marca: {product.brand}</Text>
          <Text variant="bodyMedium">Avaliação: {product.rating}/5</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: '#fff' },
  title: { marginTop: 8, marginBottom: 8 },
  description: { marginBottom: 8, color: '#666' },
  price: { marginBottom: 8, color: '#2e7d32' },
});