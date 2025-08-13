import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from "expo-router";

export default function TabRootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false, //diz para o Stack.Navigator(usei o Stack, pois é um atalho do expo-router) não mostrar a barra superior (header).
          title: 'splash screen'
        }}
      />      
      <Tabs.Screen
        name="cadastro"
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="inicio"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={size} color="white" />
          )
        }}
      />      
      <Tabs.Screen
        name="materiais"
        options={{
          headerShown: false,
          title: "Materiais",
          tabBarActiveTintColor: "red", //ativo
          tabBarInactiveTintColor: "white", //inativo
          tabBarIcon: ({ color, size }) => (                
                <Entypo name="open-book" size={size} color="white" />
          ),
        }}
      />      
    </Tabs>

  );
}


