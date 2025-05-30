import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ícone de avatar

const { width } = Dimensions.get('window');

const eventosMock = [
  {
    titulo: 'Judô - Ring Y',
    subtitulo: 'Aulas para iniciantes e avançados',
    data: 'Terça e Quinta',
    local: 'Centro Esportivo Y',
    status: 'Gratuito',
    imagem: require('../../assets/images/judo.jpg'),
  },
  {
    titulo: 'Crossfit no Parque',
    subtitulo: 'Aulas ao ar livre',
    data: 'Segunda a Sexta',
    local: 'Parque da Cidade',
    status: 'Pago',
    imagem: require('../../assets/images/crossfit.jpg'),
  },
  {
    titulo: 'Yoga ao Pôr do Sol',
    subtitulo: 'Prática em grupo',
    data: 'Domingo às 18h',
    local: 'Eixão Norte',
    status: 'Hoje',
    imagem: require('../../assets/images/yoga.jpg'),
  },
];

export default function BuscaEventoScreen() {
  const navigation = useNavigation();
  const [filtroTexto, setFiltroTexto] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState(null);

  const aplicarFiltros = (evento) => {
    const texto = filtroTexto.toLowerCase();
    const passaTexto = evento.titulo.toLowerCase().includes(texto);
    const passaCategoria = filtroCategoria ? evento.status === filtroCategoria : true;
    return passaTexto && passaCategoria;
  };

  const eventosFiltrados = eventosMock.filter(aplicarFiltros);

  const handleEventoPress = (evento) => {
    navigation.navigate('DetalhesEvento', { evento });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Buscar Eventos</Text>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Digite para buscar"
          placeholderTextColor="#999"
          onChangeText={setFiltroTexto}
          value={filtroTexto}
        />
        <Ionicons name="person-circle-outline" size={32} color="#003366" />
      </View>

      <View style={styles.filterRow}>
        {['Gratuito', 'Pago', 'Hoje'].map((filtro) => (
          <TouchableOpacity
            key={filtro}
            style={[
              styles.filterButton,
              filtroCategoria === filtro && styles.filterButtonActive,
            ]}
            onPress={() =>
              setFiltroCategoria(filtroCategoria === filtro ? null : filtro)
            }
          >
            <Text style={styles.filterButtonText}>{filtro}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Eventos sugeridos</Text>
      {eventosFiltrados.map((evento, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.card}
          onPress={() => handleEventoPress(evento)}
        >
          <Image source={evento.imagem} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{evento.titulo}</Text>
            <Text style={styles.cardSubtitle}>{evento.subtitulo}</Text>
            <Text style={styles.cardInfo}>📅 {evento.data}</Text>
            <Text style={styles.cardInfo}>📍 {evento.local}</Text>
          </View>
        </TouchableOpacity>
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
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop:40,
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    color: '#000',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  filterButtonActive: {
    backgroundColor: '#ffd700',
  },
  filterButtonText: {
    fontWeight: 'bold',
    color: '#003366',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001F54',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  cardInfo: {
    fontSize: 12,
    color: '#777',
  },
});
