import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function TelaDesempenhoScreen() {
  const navigation = useNavigation();

  const desempenhos = [
    {
      titulo: 'Corrida no Parque',
      descricao: 'Fiz uma corrida de 4 km no parque da cidade com meus amigos',
      horario: 'Hoje, 6:20pm',
      pontos: 85,
    },
    {
      titulo: 'Natação Clube',
      descricao: 'Treino de resistência na piscina olímpica',
      horario: 'Hoje, 6:20pm',
      pontos: 64,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header com botão */}
      <View style={styles.headerRow}>
        <Text style={styles.header}>Desempenhos</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CriarDesempenho')}
        >
          <Text style={styles.addButtonText}>+ Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de desempenhos */}
      {desempenhos.map((item, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardDesc}>{item.descricao}</Text>
            <Text style={styles.cardTime}>feito: {item.horario}</Text>
          </View>
          <View style={styles.pontosBox}>
            <Text style={styles.pontos}>{item.pontos}</Text>
            <Text style={styles.pontosLabel}>Pontos</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  addButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#003366',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#002B5B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cardDesc: {
    fontSize: 13,
    color: '#ccc',
    marginVertical: 4,
  },
  cardTime: {
    fontSize: 12,
    color: '#00BFFF',
  },
  pontosBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pontos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34D399',
  },
  pontosLabel: {
    fontSize: 12,
    color: '#aaa',
  },
});
