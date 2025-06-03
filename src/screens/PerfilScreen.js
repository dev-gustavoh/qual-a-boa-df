import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUsuario } from '../services/usuarioApi';  // Função para buscar dados do usuário
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Para acessar o AsyncStorage

export default function PerfilScreen() {
  const [usuario, setUsuario] = useState(null); // Estado para armazenar os dados do usuário
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const navigation = useNavigation();

  // Função para carregar os dados do usuário
  const carregarUsuario = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem('userId'); // Obtendo o 'userId' completo do AsyncStorage
      console.log("storedUserId", storedUserId); // Verificando se o ID do usuário está correto

      if (storedUserId) {
        const usuarioData = await getUsuario(storedUserId); // Chama a API para obter os dados do usuário
        console.log("Dados do usuário:", usuarioData); // Verificando os dados do usuário
        setUsuario(usuarioData); // Atualiza o estado com os dados do usuário
      } else {
        Alert.alert("Erro", "Usuário não encontrado no sistema.");
      }
    } catch (error) {
      console.error("Erro ao carregar dados do usuário", error);
      Alert.alert("Erro", "Não foi possível carregar os dados do usuário.");
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    carregarUsuario(); // Carregar os dados do usuário ao montar a tela
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Carregando dados...</Text>;
  }

  if (!usuario) {
    return <Text style={styles.loading}>Não foi possível carregar os dados do usuário.</Text>;
  }

  return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarPlaceholder}>
            <FontAwesome name="user-circle" size={64} color="#fff" />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{usuario.primeiroNome} {usuario.sobrenome}</Text>
            <Text style={styles.userEmail}>{usuario.email}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ConfigPage')}>
          <MaterialIcons name="settings" size={20} color="#333" style={styles.icon} />
          <Text style={styles.cardText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TelaDesempenho')}>
          <MaterialIcons name="bar-chart" size={20} color="#333" style={styles.icon} />
          <Text style={styles.cardText}>Desempenho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Notificacao')}>
          <Feather name="bell" size={20} color="#333" style={styles.icon} />
          <Text style={styles.cardText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EditarPerfil')}>
          <Feather name="edit" size={20} color="#333" style={styles.icon} />
          <Text style={styles.cardText}>Editar Perfil</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>General</Text>

        <TouchableOpacity style={styles.card}>
          <Feather name="help-circle" size={20} color="#333" style={styles.icon} />
          <Text style={styles.cardText}>Suporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Feather name="shield" size={20} color="#333" style={styles.icon} />
          <Text style={styles.cardText}>Terms of Service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Feather name="user-plus" size={20} color="#333" style={styles.icon} />
          <Text style={styles.cardText}>Convidar Amigos</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 70,
  },
  avatarPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#00509E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#ccc',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
    marginTop: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  loading: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
