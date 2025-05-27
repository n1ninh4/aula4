import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Avatar } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Erro ao carregar produtos:', error));
  }, [category]);

  const renderProduct = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('Produto', { productId: item.id })}>
      <Card.Content style={styles.cardContent}>
        <Avatar.Image size={50} source={{ uri: item.thumbnail }} />
        <View style={styles.textContainer}>
          <Text variant="titleMedium">{item.title}</Text>
          <Text variant="bodyMedium">R$ {item.price}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  card: { marginBottom: 8, backgroundColor: '#fff' },
  cardContent: { flexDirection: 'row', alignItems: 'center' },
  textContainer: { marginLeft: 16, flex: 1 },
});