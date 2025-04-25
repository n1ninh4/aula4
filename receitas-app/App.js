import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={styles.screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Receitas',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Receita"
          component={ReceitaScreen}
          options={{
            title: 'Detalhes da Receita',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenOptions: {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#5c6bc0',  
    },
    headerTintColor: '#fff', 
  },
  headerStyle: {
    backgroundColor: '#ebcfb7',  
    height: 90,
  },
});
