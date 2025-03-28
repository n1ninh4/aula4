//import dos componentes e libs
;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

import PrimeiroComponente from '../5-FUNDAMENTOS/Componentes/PrimeiroComponente'; 

//função principal do componenete 
export default function App() {
//logica do meu componente 
const nome = " Sucesso Garantido!"

function alerta () {
  alert("Luan Santana: Sucesso Garantido!")
}





  //retorno é um codigo JSX (TEMPLATE) do que vai ser
  //renderizado na tela
  return ( 
    
  

    <ScrollView contentContainerStyle={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.textBox}>

      <PrimeiroComponente />
      <PrimeiroComponente /> 
      <PrimeiroComponente />
      <PrimeiroComponente />
      <PrimeiroComponente />
      <PrimeiroComponente />
      <PrimeiroComponente />
      <PrimeiroComponente />
      <PrimeiroComponente />
      <PrimeiroComponente />

       <Text style={{ fontSize: 50}}>Luan Santana</Text>
       <Text style={{ fontSize: 30}}>{nome}</Text>

      
       <Text style={styles.title}>Luan Santana</Text>
      <Text style={styles.title}> Cantor e compositor brasileiro</Text>
      <Text style={styles.title}> Nascimento: 13 de março de 1991</Text>
      <Text style={styles.title}> Gênero: Sertanejo Universitário</Text>
      <Text style={styles.title}> Sucessos: Meteoro, Te Esperando, Morena</Text>

      <View style={styles.buttonContainer}>

      <Button title='O MAIOR CANTOR DO BRASIL' onPress={alerta}></Button>
       
       

      </View>

    <Image 
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXH7EMNQWYA4TBeLk3e9tEgI2yJxQNaxhotA&s'
    }}
    style={{
      
      height: 200,
      width: 200,
      paddingTop: 10,
      marginVertical: 10,
      borderRadius: 10,
    }}
    />

<Image 
    source={{
      uri: 'https://i.pinimg.com/474x/7d/13/96/7d1396910bb3c5fcb282d5a05b01727b.jpg'
    }}
    style={{
      
     
      height: 200,
      width: 200,
      paddingTop:10,
      marginVertical:10,
      borderRadius: 10,
    }}
    /> 
    
    <Image 
    source={{
      uri: 'https://i.pinimg.com/236x/c2/11/ea/c211ea38dc939cc01763bb78e57d1c1a.jpg'
    }}
    style={{
      
      height: 200,
      width: 200,
      paddingTop:10,
      marginVertical:10,
      borderRadius:10,
    
    }}
    />
    
    <Image 
    source={{
      uri: 'https://i.pinimg.com/736x/4e/62/cd/4e62cd3603979c354dc69fea025fe152.jpg'
    }}
    style={{
      
      height: 200,
      width: 200,
      paddingTop:10,
      marginVertical:10,
      borderRadius: 10,
    }}
    />

    <Image 
    source={{
      uri: 'https://i.pinimg.com/736x/17/33/97/173397ab0829467c7ff9da3bdbf459ae.jpg'
    }}
    style={{
      
      height: 200,
      width: 200,
      paddingTop:10,
      marginVertical:10,
      borderRadius: 10,
    }}
    />

      
    </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
  },

  textBox: {
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
    width: "90%",
    alignItems: "center",

  textogrande: {
    fontSize: 50,
    fontWeight: 800,
    fontStyle: 'italic',
  },

  buttonContainer: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#000",
  }

  
}});

