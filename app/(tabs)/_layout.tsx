import { Tabs } from "expo-router";

export default function TabRootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false, //diz para o Stack.Navigator(usei o Stack, pois é um atalho do expo-router) não mostrar a barra superior (header).
          title: 'Teste'
        }}
      />      
      <Tabs.Screen
        name="cadastro"
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="inicio"
        options={{headerShown: false}}
      />      
    </Tabs>
  
  );


}
