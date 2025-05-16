import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Mega Sena') iconName = 'numeric';
              else if (route.name === 'Jogo do Bicho') iconName = 'cow';

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: route.name === 'Mega Sena' ? '#1abc9c' : '#e67e22',
            tabBarInactiveTintColor: '#95a5a6',
            headerStyle: {
              backgroundColor: route.name === 'Mega Sena' ? '#16a085' : '#8e44ad',
            },
            headerTintColor: '#fff',
          })}
        >
          <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
