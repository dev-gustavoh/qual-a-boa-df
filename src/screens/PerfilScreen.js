import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';

export default function PerfilScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <FontAwesome name="user-circle" size={64} color="#fff" />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Joy Augustin</Text>
          <Text style={styles.userEmail}>joy@augustin.com</Text>
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
});
