import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const renderCategory = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.categoryText}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('ListaProdutos', { category: item })}
          style={styles.button}
        >
          Ver Produtos
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
    borderRadius: 8,
  },
  categoryText: {
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6200ee',
  },
});
