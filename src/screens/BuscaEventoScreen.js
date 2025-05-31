import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getEventos } from '../services/api'; // Função para buscar eventos da API
import { getCategorias } from '../services/categoriaApi'; // Função para buscar categorias da API

const { width } = Dimensions.get('window');

export default function BuscaEventoScreen() {
  const navigation = useNavigation();
  const [eventos, setEventos] = useState([]);
  const [categorias, setCategorias] = useState([]); // Estado para armazenar categorias
  const [loading, setLoading] = useState(true);
  const [filtroTexto, setFiltroTexto] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState(null); // Estado para categoria selecionada

  // Função para carregar os eventos
  const carregarEventos = async () => {
    try {
      const data = await getEventos();
      setEventos(data);
    } catch (error) {
      console.error("❌ Erro ao carregar eventos:", error);
    }
  };

  // Função para carregar as categorias
  const carregarCategorias = async () => {
    try {
      const data = await getCategorias(); // Obtendo as categorias
      setCategorias(data);
    } catch (error) {
      console.error("❌ Erro ao carregar categorias:", error);
    }
  };

  useEffect(() => {
    const carregarDados = async () => {
      setLoading(true);  // Inicializa o carregamento

      // Carrega eventos e categorias de forma assíncrona
      await Promise.all([carregarEventos(), carregarCategorias()]);

      // Depois que ambos os dados forem carregados, setar o loading como false
      setLoading(false);
    };

    carregarDados();
  }, []);  // Executa uma vez, quando o componente for montado

  // Função para navegar para os detalhes do evento
  const handleEventoPress = (evento) => {
    navigation.navigate('DetalhesEvento', { evento });
  };

  // Função para aplicar o filtro de busca
  const aplicarFiltroBusca = (evento) => {
    const texto = filtroTexto.toLowerCase();
    const titulo = evento.titulo || evento.nome || '';  // Verifica se 'titulo' ou 'nome' existe
    const passaTexto = titulo.toLowerCase().includes(texto);
    const passaCategoria = filtroCategoria ? evento.categoria === filtroCategoria : true; // Filtro de categoria
    return passaTexto && passaCategoria;
  };

  // Filtrando os eventos com base no texto da busca e na categoria
  const eventosFiltrados = eventos.filter(aplicarFiltroBusca);

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Buscar Eventos</Text>

        {/* Box de busca */}
        <View style={styles.searchBox}>
          <TextInput
              style={styles.input}
              placeholder="Digite para buscar"
              placeholderTextColor="#999"
              onChangeText={setFiltroTexto}
              value={filtroTexto}
          />
        </View>

        {/* Filtro de categorias */}
        <View style={styles.filterRow}>
          {categorias.map((categoria) => (
              <TouchableOpacity
                  key={categoria.id}
                  style={[
                    styles.filterButton,
                    filtroCategoria === categoria.nome && styles.filterButtonActive, // Aplique estilo quando a categoria estiver ativa
                  ]}
                  onPress={() =>
                      setFiltroCategoria(filtroCategoria === categoria.nome ? null : categoria.nome) // Alternar categoria
                  }
              >
                <Text style={styles.filterButtonText}>{categoria.nome}</Text>
              </TouchableOpacity>
          ))}
        </View>

        {loading ? (
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        ) : (
            <>
              <Text style={styles.sectionTitle}>Eventos sugeridos</Text>
              {eventosFiltrados.length > 0 ? (
                  eventosFiltrados.map((evento, idx) => (
                      <TouchableOpacity
                          key={idx}
                          style={styles.card}
                          onPress={() => handleEventoPress(evento)}
                      >
                        <Image
                            source={evento.imagem ? { uri: evento.imagem } : require('../../assets/images/default.jpg')}
                            style={styles.cardImage}
                        />
                        <View style={styles.cardContent}>
                          <Text style={styles.cardTitle}>{evento.titulo || evento.nome || 'Evento sem nome'}</Text>
                          <Text style={styles.cardSubtitle}>{evento.descricao || 'Sem descrição'}</Text>
                          <Text style={styles.cardDate}>
                            📅 {evento.data ? new Date(evento.data).toLocaleDateString() : 'Data indefinida'}
                          </Text>
                        </View>
                      </TouchableOpacity>
                  ))
              ) : (
                  <Text style={styles.noResults}>Nenhum evento encontrado.</Text>
              )}
            </>
        )}
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
    marginTop: 40,
    marginBottom: 12,
  },
  // Box de busca
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    height: 48,
    color: '#000',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 5,
  },
  filterButtonActive: {
    backgroundColor: '#ffd700',
  },
  filterButtonText: {
    fontWeight: 'bold',
    color: '#003366',
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
  cardDate: {
    fontSize: 12,
    color: '#777',
  },
  noResults: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
