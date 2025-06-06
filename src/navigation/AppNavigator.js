import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

import Login from '../auth/Login';
import BebidaLista from '../bebidas/BebidaLista';
import BebidaForm from '../bebidas/BebidaForm';
import ClienteLista from '../clientes/ClienteLista';
import ClienteForm from '../clientes/ClienteForm';
import PedidoLista from '../pedidos/PedidoLista';
import PedidoForm from '../pedidos/PedidoForm';
import RastreamentoStatus from '../rastreamento/RastreamentoStatus';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BebidasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BebidaLista" component={BebidaLista} options={{ title: 'Bebidas' }} />
      <Stack.Screen name="BebidaForm" component={BebidaForm} options={{ title: 'Cadastrar/Editar Bebida' }} />
    </Stack.Navigator>
  );
}

function ClientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClienteLista" component={ClienteLista} options={{ title: 'Clientes' }} />
      <Stack.Screen name="ClienteForm" component={ClienteForm} options={{ title: 'Cadastrar/Editar Cliente' }} />
    </Stack.Navigator>
  );
}

function PedidosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PedidoLista" component={PedidoLista} options={{ title: 'Pedidos' }} />
      <Stack.Screen name="PedidoForm" component={PedidoForm} options={{ title: 'Cadastrar/Editar Pedido' }} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Bebidas') iconName = 'glass-cocktail';
          else if (route.name === 'Clientes') iconName = 'account-group';
          else if (route.name === 'Pedidos') iconName = 'clipboard-list';
          else if (route.name === 'Rastreamento') iconName = 'map-marker-path';
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Bebidas" component={BebidasStack} />
      <Tab.Screen name="Clientes" component={ClientesStack} />
      <Tab.Screen name="Pedidos" component={PedidosStack} />
      <Tab.Screen name="Rastreamento" component={RastreamentoStatus} options={{ title: 'Rastreamento' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <PaperProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      </PaperProvider>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        {user ? <Tabs /> : <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>}
      </NavigationContainer>
    </PaperProvider>
  );
}
