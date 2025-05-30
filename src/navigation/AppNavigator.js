import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Telas principais com bottom tab
import InicioScreen from '../screens/InicioScreen';
import BuscaEventoScreen from '../screens/BuscaEventoScreen';
import TelaDesempenhoScreen from '../screens/TelaDesempenhoScreen';
import PerfilScreen from '../screens/PerfilScreen';

// Telas auxiliares (stack)
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroUsuarioScreen from '../screens/CadastroUsuarioScreen';
import CadastroConcluidoScreen from '../screens/CadastroConcluidoScreen';
import CriarEventoScreen from '../screens/CriarEventoScreen';
import CriarDesempenhoScreen from '../screens/CriarDesempenhoScreen';
import DesempenhoCriadoScreen from '../screens/DesempenhoCriadoScreen';
import EventoMarcadoScreen from '../screens/EventoMarcadoScreen';
import DetalhesEventoScreen from '../screens/DetalhesEventoScreen';
import ConfigPageScreen from '../screens/ConfigPageScreen';
import EditarPerfilScreen from '../screens/EditarPerfilScreen';
import NotificacaoScreen from '../screens/NotificacaoScreen';
import PerfilAtualizadoScreen from '../screens/PerfilAtualizadoScreen';
import LocationDetailsScreen from '../screens/LocationDetailsScreen';
import CadastroSucessScreen from '../screens/CadastroSucessScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getTabIcon(routeName) {
  switch (routeName) {
    case 'Inicio':
      return 'home';
    case 'BuscaEvento':
      return 'search';
    case 'TelaDesempenho':
      return 'bar-chart';
    case 'Perfil':
      return 'person';
    default:
      return 'ellipse';
  }
}

function BottomTabs() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: '#004892',
    tabBarInactiveTintColor: '#aaa',
    tabBarStyle: { backgroundColor: '#ffffff' },
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={getTabIcon(route.name)} size={size} color={color} />
    ),
  })}
>
  <Tab.Screen
    name="Inicio"
    component={InicioScreen}
    options={{ tabBarLabel: 'Início' }}
  />
  <Tab.Screen
    name="BuscaEvento"
    component={BuscaEventoScreen}
    options={{ tabBarLabel: 'Buscar' }}
  />
  <Tab.Screen
    name="TelaDesempenho"
    component={TelaDesempenhoScreen}
    options={{ tabBarLabel: 'Desempenho' }}
  />
  <Tab.Screen
    name="Perfil"
    component={PerfilScreen}
    options={{ tabBarLabel: 'Perfil' }}
  />
</Tab.Navigator>

  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
        <Stack.Screen name="CadastroConcluido" component={CadastroConcluidoScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="CriarEvento" component={CriarEventoScreen} />
        <Stack.Screen name="CriarDesempenho" component={CriarDesempenhoScreen} />
        <Stack.Screen name="DesempenhoCriado" component={DesempenhoCriadoScreen} />
        <Stack.Screen name="EventoMarcado" component={EventoMarcadoScreen} />
        <Stack.Screen name="DetalhesEvento" component={DetalhesEventoScreen} />
        <Stack.Screen name="ConfigPage" component={ConfigPageScreen} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} />
        <Stack.Screen name="Notificacao" component={NotificacaoScreen} />
        <Stack.Screen name="PerfilAtualizado" component={PerfilAtualizadoScreen} />
        <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
        <Stack.Screen name="CadastroSucess" component={CadastroSucessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
