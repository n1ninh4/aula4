import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';
import { Title, Paragraph, Divider, Card } from 'react-native-paper';

export default function ReceitaScreen({ route }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <Title style={styles.nome}>{receita.nome}</Title>
      <Paragraph style={styles.info}>Tempo de preparo: {receita.tempoPreparo}   Porções: {receita.porcoes}</Paragraph>

      <Divider style={styles.divider} />
      <Card style={styles.card}>
        <Title style={styles.sectionTitle}>Ingredientes</Title>
        {receita.ingredientes.map((item, index) => (
          <Paragraph key={index} style={styles.itemText}>• {item}</Paragraph>
        ))}
      </Card>

      <Divider style={styles.divider} />
      <Card style={styles.card}>
        <Title style={styles.sectionTitle}>Modo de Preparo</Title>
        {receita.modoPreparo.map((item, index) => (
          <Paragraph key={index} style={styles.itemText}>{item}</Paragraph>
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    marginBottom: 12,
    fontSize: 14,
    color: '#555',
  },
  divider: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 8,
    color: '#333',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 1,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#444',
  },
});
