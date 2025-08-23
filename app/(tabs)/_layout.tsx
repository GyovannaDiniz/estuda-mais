import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
        name="login"
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'pink',
          tabBarInactiveTintColor: 'white',
          tabBarIcon: ({ color, size}) => (
              <Ionicons name="home-outline" size={size} colo='white' />
          )
        }}
      />
      <Tabs.Screen
        name="inicio"
        options={{
          headerShown: false,
          tabBarActiveTintColor:'pink',
          tabBarInactiveTintColor:'white',
          tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color="white" />
          )
        }}
      />      
      <Tabs.Screen
        name="materiais"
        options={{
          headerShown: false,
          title: "Materiais",
          tabBarActiveTintColor: "pink", //ativo
          tabBarInactiveTintColor: "white", //inativo
          tabBarIcon: ({ color, size }) => (                
                <MaterialCommunityIcons name="book-open-page-variant-outline" size={size} color="white" />
          ),
        }}
      />      
    </Tabs>

  );
}


