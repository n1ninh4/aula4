import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import EscudoScreen from '../componentes/screen/EscudoScreen'
import JogadoresScreen from '../componentes/screen/JogadoresScreen'
import TitulosScreen from '../componentes/screen/TitulosScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen  
      name='Escudo' 
      component={EscudoScreen}
      />

      <Drawer.Screen  
      name='Jogadores' 
      component={JogadoresScreen}
      />

      <Drawer.Screen  
      name='Titulos' 
      component={TitulosScreen}
      />
    </Drawer.Navigator>

  )
}