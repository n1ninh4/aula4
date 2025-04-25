import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    imagem: 'https://i.pinimg.com/236x/84/87/bc/8487bcccf39fc5577cc616978c8e24be.jpg',
    ingredientes: ["1kg de feijão preto", "500g de carne seca", "300g de linguiça", "200g de costelinha", "2 laranjas", "Couve a gosto", "Arroz para acompanhar"],
    modoPreparo: ["1. Deixe o feijão de molho por 12 horas", "2. Cozinhe o feijão na panela de pressão", "3. Adicione as carnes", "4. Cozinhe até ficar macio", "5. Sirva com arroz, couve e laranja"]
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempoPreparo: "40 minutos",
    porcoes: 6,
    imagem: 'https://i.pinimg.com/736x/06/61/cd/0661cd5b1c7c246b85f90f2c96e79b70.jpg',
    ingredientes: ["1kg de peito de frango", "2 caixas de creme de leite", "2 colheres de extrato de tomate", "2 colheres de ketchup", "2 colheres de mostarda", "Champignon a gosto", "Batata palha para acompanhar"],
    modoPreparo: ["1. Corte o frango em cubos", "2. Doure o frango na panela", "3. Adicione os molhos e o champignon", "4. Adicione o creme de leite", "5. Sirva com arroz e batata palha"]
  },
  {
    id: 3,
    nome: "Brownie",
    tempoPreparo: "50 minutos",
    porcoes: 12,
    imagem: 'https://i.pinimg.com/236x/ba/0c/7e/ba0c7e9727c8946c441dd0e0d433cd84.jpg',
    ingredientes:[  
       "4 ovos",  
  "2 xícaras de açúcar",  
  "1 xícara de farinha de trigo",  
  "1 xícara de chocolate em pó ou cacau em pó de boa qualidade",  
  "1 xícara de óleo (ou 100g de manteiga derretida)",  
  "1 xícara de leite",  
  "1 colher de fermento em pó",  
  "1 colher de chá de essência de baunilha (opcional)",  
  "1 xícara de chocolate em pedaços (opcional, para um brownie mais chocólatra)"    
      ],
    modoPreparo: [  
        "1. Pré-aqueça o forno a 180°C e unte a forma com manteiga ou forre com papel manteiga.",  
        "2. Em uma tigela grande, bata os ovos com o açúcar até ficar bem misturado e suave.",  
        "3. Adicione o óleo (ou manteiga derretida) e a essência de baunilha, batendo bem.",  
        "4. Em outra tigela, misture os ingredientes secos: farinha, chocolate em pó e fermento.",  
        "5. Adicione a mistura seca aos ingredientes molhados, alternando com o leite, e misture até ficar homogêneo.",  
        "6. Se desejar, incorpore as nozes e o chocolate em pedaços à massa.",  
        "7. Despeje a massa na forma preparada e nivele com uma espátula.",  
        "8. Asse por aproximadamente 25 a 30 minutos, ou até que um palito inserido no centro saia com algumas migalhas (não completamente limpo para um brownie fudgy).",  
        "9. Deixe esfriar na forma antes de cortar em pedaços e servir."  
      ]  
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Receita', { receita: item })}>
            <Card style={styles.card} mode="outlined">
              <Card.Cover source={{ uri: item.imagem }} style={styles.image} />
              <Card.Content>
                <Title style={styles.title}>{item.nome}</Title>
                <Paragraph style={styles.subtitle}>{item.tempoPreparo} • {item.porcoes} porções</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFA',
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 180,
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    color: '#777',
    marginTop: 4,
  },
});
