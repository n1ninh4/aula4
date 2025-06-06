// Crie um componente simples para teste
function TelaTeste() {
  return <Text>Funcionando!</Text>;
}

// Substitua temporariamente no Tabs.js
<Tab.Navigator>
  <Tab.Screen name="Bebidas" component={TelaTeste} />
  <Tab.Screen name="Clientes" component={TelaTeste} />
  <Tab.Screen name="Pedidos" component={TelaTeste} />
  <Tab.Screen name="Rastreamento" component={TelaTeste} />
</Tab.Navigator>
