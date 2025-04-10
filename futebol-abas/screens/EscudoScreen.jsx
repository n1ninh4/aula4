import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Escudo do Flamengo</Text>
      </View>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/0e/bd/6b/0ebd6b8b25e4d9bbe17a8495e3098466.jpg' }}
        style={styles.escudo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tituloContainer: {
    backgroundColor: '#D00000', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titulo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  escudo: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
});

export default EscudoScreen;
