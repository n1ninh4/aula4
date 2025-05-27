import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Erro ao carregar categorias:', error));
  }, []);

  const renderCategory = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('ListaProdutos', { category: item })}>
      <Card.Content>
        <Text variant="titleMedium">{item}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  card: { marginBottom: 8, backgroundColor: '#fff' },
});
