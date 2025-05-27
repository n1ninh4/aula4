import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
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
        <Card.Cover source={{ uri: product.thumbnail }} style={styles.image} />
        <Card.Content>
          <Title style={styles.title}>{product.title}</Title>
          <Paragraph style={styles.description}>{product.description}</Paragraph>
          <Text variant="titleLarge" style={styles.price}>${product.price}</Text>
          <Text variant="bodyMedium">Marca: {product.brand}</Text>
          <Text variant="bodyMedium">Categoria: {product.category}</Text>
          <Text variant="bodyMedium">Avaliação: {product.rating}/5</Text>
          <Text variant="bodyMedium">Estoque: {product.stock} unidades</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
    elevation: 4,
    borderRadius: 8,
  },
  image: {
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
    marginVertical: 8,
  },
});
