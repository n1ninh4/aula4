import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Filme from './componentes/Filme';
import Serie from './componentes/Serie';

const listaFilmes = [
  {nome: "Gente Grande",
  ano: 2010,
  diretor: "Dennis Dugan",
  tipo: "Comédia",
  capa: "https://i.pinimg.com/236x/b1/4b/95/b14b95148f0d1555f0d6c328c23145f5.jpg"
  },

  {
    nome: "Bad Boys para Sempre",
    ano: 2020,
    diretor: "Adil El Arbi, Bilall Fallah",
    tipo: "Ação",
    capa: "https://i.pinimg.com/736x/e4/e6/b7/e4e6b7b127f4480301208c60f85e461e.jpg"
  },

   {
    nome: "Barbie",
    ano: 2023,
    diretor: "Greta Gerwig",
    tipo: "Fantasia/Comédia",
    capa: "https://i.pinimg.com/736x/fc/c6/0f/fcc60ff0722dac3456cd5183d1da8d45.jpg"
  },

];

const listaSeries = [
  {
    nome: "Beleza Fatal",
    ano: 2025,
    diretor: "Maria de Médicis",
    temporadas: 1,
    capa: "https://i.pinimg.com/736x/4e/a8/b8/4ea8b8802de089f43bcbddccffb97065.jpg"
  },
  {
    nome: "De Volta aos 15",
    ano: 2022,
    diretor: "Vivianne Jundi e Dainara Toffoli",
    temporadas: 2,
    capa: "https://i.pinimg.com/736x/7f/0b/e6/7f0be692f8dadac714941af77d73b0ed.jpg"
  },
  {
    nome: "Diário de um Vampiro",
    ano: 2009,
    diretor: "Kevin Williamson e Julie Plec",
    temporadas: 8,
    capa: "https://i.pinimg.com/736x/20/4a/09/204a09761a698892b8f649726b13f728.jpg"
  }
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Filmes</Text>
      {listaFilmes.map((filme, index) => (
        <Filme key={index} {...filme} />
      ))}

      <Text style={styles.header}>Séries</Text>
      {listaSeries.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white"
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});