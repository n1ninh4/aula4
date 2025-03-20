// IMPORTS 
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

// componente principaal
// ele deve retornar o que será renderzado na tela (template feito com JSK)
export default function App() {
 //Logica do meu componente
 
 //retorno com JSK
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Comentario do templete JSK */}
       {/* CODIGO JAVA SCRIPT */}
      <Text>{2+5}</Text>
      <Text>LELECO</Text>
      <Text>LEO!</Text>
      <Text>DOCINHO DE COCO!</Text>
      <Text>MOZIN!</Text>
      <Text>MELHOR FORMAAAAAAAAAAA!</Text>
      <Button title=' LEONARDO GAY'></Button>
      
      <image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22hlvdXb3zvEmEpgnS4SkcDGNgWel1ThKEg&s'}}
      style={{
        height: 300,
        width: 300,
      }}
      />


  

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
