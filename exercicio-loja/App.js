import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import ListaProdutosScreen from './screens/ListaProdutosScreen';
import ProdutoScreen from './screens/ProdutoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Categorias' }} />
          <Stack.Screen name="ListaProdutos" component={ListaProdutosScreen} options={{ title: 'Produtos' }} />
          <Stack.Screen name="Produto" component={ProdutoScreen} options={{ title: 'Detalhes do Produto' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}