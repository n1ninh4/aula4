import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const EscudoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Clube de Regatas do Flamengo</Text>
      
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/d5/91/25/d5912525c0fb72dd664895b0dcc3e0df.jpg' }}
        style={styles.escudo}
        resizeMode="contain"
      />

      <Text style={styles.phrase}>
        "Uma vez Flamengo, sempre Flamengo!"
      </Text>

      <Text style={styles.description}>
        Fundado em 1895, o Flamengo é um dos clubes mais tradicionais e vitoriosos do futebol brasileiro. 
        Com uma imensa torcida apaixonada, o Mengão conquistou títulos nacionais e internacionais, incluindo a 
        Libertadores da América e o Campeonato Brasileiro. O escudo simboliza uma história de glória, raça e amor ao manto rubro-negro.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e60000',
    marginBottom: 20,
    textAlign: 'center',
  },
  escudo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  phrase: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#ffcc00',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#eeeeee',
    textAlign: 'justify',
    lineHeight: 24,
  },
});

export default EscudoScreen;
