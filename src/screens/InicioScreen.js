// InicioScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function InicioScreen() {
  const [selectedCity, setSelectedCity] = useState('Plano Piloto');
  const [eventosSugestao, setEventosSugestao] = useState([]);
  const [eventosFavoritos, setEventosFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchEventos = async () => {
    try {
      // Exemplo de chamada a uma API (ajuste para seu endpoint real)
      const response = await fetch('https://seu-backend.com/api/eventos');
      const data = await response.json();
      setEventosSugestao(data.sugestoes || []);
      setEventosFavoritos(data.favoritos || []);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  const handleEventoPress = (evento) => {
    navigation.navigate('DetalhesEvento', { evento });
  };

  const handleCriarEvento = () => {
    navigation.navigate('CriarEvento');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ color: '#fff', marginTop: 12 }}>Carregando eventos...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.createButton} onPress={handleCriarEvento}>
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text style={styles.createButtonText}>Criar Evento</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <Text style={styles.sectionTitle}>Sugestões</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {eventosSugestao.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.card, { backgroundColor: item.color || '#444', width: width * 0.8 }]}
              onPress={() => handleEventoPress(item)}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.desc}</Text>
              <Text style={styles.cardDate}>📅 {item.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Favoritos</Text>
        {eventosFavoritos.map((fav, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.card, styles.favCard, { backgroundColor: fav.color || '#666', width: '100%' }]}
            onPress={() => handleEventoPress(fav)}
          >
            <Text style={styles.cardTitle}>{fav.title}</Text>
            <Text style={styles.cardDate}>📅 {fav.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0059b3',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
  },
  createButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 24,
    marginBottom: 16,
  },
  carousel: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
  },
  favCard: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'white',
    marginVertical: 4,
  },
  cardDate: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
