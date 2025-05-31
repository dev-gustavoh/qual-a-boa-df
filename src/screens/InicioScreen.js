import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getEventos } from '../services/api';

export default function InicioScreen() {
  const navigation = useNavigation();
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEventoPress = (evento) => {
    navigation.navigate('DetalhesEvento', { evento });
  };

  useEffect(() => {
    getEventos()
        .then((data) => {
          console.log("✅ Eventos recebidos:", data);
          setEventos(data);
        })
        .catch((err) => {
          console.error("❌ Erro ao carregar eventos:", err);
        })
        .finally(() => setLoading(false));
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Sugestões</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('CriarEvento')}
                style={styles.criarEventoBtn}
            >
              <Text style={styles.criarEventoText}>+ Criar Evento</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
              <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
          ) : (
              eventos.map((item, idx) => (
                  <TouchableOpacity
                      key={idx}
                      style={styles.card}
                      onPress={() => handleEventoPress(item)}
                  >
                    <Image
                        source={require('../../assets/images/default.jpg')} // imagem padrão
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                      <Text style={styles.cardTitle}>{item.nome || 'Evento sem nome'}</Text>
                      <Text style={styles.cardSubtitle}>{item.descricao || 'Sem descrição'}</Text>
                      <Text style={styles.cardDate}>
                        📅 {item.data ? new Date(item.data).toLocaleDateString() : 'Data indefinida'}
                      </Text>
                    </View>
                  </TouchableOpacity>
              ))
          )}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  criarEventoBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  criarEventoText: {
    color: '#003366',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#004080',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-around',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'white',
  },
  cardDate: {
    fontSize: 14,
    color: '#facc15',
    marginTop: 4,
  },
});
