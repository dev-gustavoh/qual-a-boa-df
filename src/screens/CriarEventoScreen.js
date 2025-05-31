import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, Modal, Alert, ActivityIndicator // Adicionar a importação do ActivityIndicator
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getCategorias } from '../services/categoriaApi'; // Função para buscar categorias da API

export default function CriarEventoScreen() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [local, setLocal] = useState('');
  const [urlEvento, setUrlEvento] = useState('');
  const [organizador, setOrganizador] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [categorias, setCategorias] = useState([]); // Estado para armazenar as categorias
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carregamento para as categorias

  const BASE_URL = 'http://192.168.0.6:8080';

  // Função para carregar as categorias da API
  const carregarCategorias = async () => {
    try {
      const data = await getCategorias(); // Obtendo as categorias da API
      setCategorias(data);
      setLoading(false); // Após carregar as categorias, setar loading como false
    } catch (error) {
      console.error("❌ Erro ao carregar categorias:", error);
      setLoading(false); // Mesmo em caso de erro, setar loading como false
    }
  };

  useEffect(() => {
    carregarCategorias(); // Carregar categorias ao montar o componente
  }, []);

  const handleSalvarEvento = async () => {
    if (!nome || !descricao || !dataEvento || !local || !urlEvento || !organizador || !categoriaSelecionada) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const evento = {
      nome,
      descricao,
      dataEvento,
      local,
      urlEvento,
      organizador,
      idCategoria: categoriaSelecionada,
    };

    try {
      const response = await fetch(`${BASE_URL}/eventos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(evento),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar evento');
      }

      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
        navigation.navigate('Inicio');
      }, 2000);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  const toggleCategoria = (id) => {
    setCategoriaSelecionada(prev => (prev === id ? null : id)); // Alternar a seleção da categoria
  };

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Criar Evento</Text>
          <TextInput style={styles.input} placeholder="Nome do Evento" value={nome} onChangeText={setNome} />
          <TextInput style={[styles.input, { height: 80 }]} placeholder="Descrição" multiline value={descricao} onChangeText={setDescricao} />
          <TextInput style={styles.input} placeholder="Data e Hora (ex: 2025-01-21T09:00:00)" value={dataEvento} onChangeText={setDataEvento} />
          <TextInput style={styles.input} placeholder="Local" value={local} onChangeText={setLocal} />
          <TextInput style={styles.input} placeholder="URL do Evento" value={urlEvento} onChangeText={setUrlEvento} />
          <TextInput style={styles.input} placeholder="Organizador" value={organizador} onChangeText={setOrganizador} />

          <Text style={styles.label}>Categoria</Text>
          {loading ? (
              <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} /> // Indicador de carregamento
          ) : (
              <View style={styles.tagsRow}>
                {categorias.map((cat) => (
                    <TouchableOpacity
                        key={cat.id}
                        style={[
                          styles.tag,
                          categoriaSelecionada === cat.id && styles.tagSelected,
                        ]}
                        onPress={() => toggleCategoria(cat.id)}
                    >
                      <Text
                          style={[
                            styles.tagText,
                            categoriaSelecionada === cat.id && styles.tagTextSelected,
                          ]}
                      >
                        {cat.nome}
                      </Text>
                    </TouchableOpacity>
                ))}
              </View>
          )}

          <TouchableOpacity style={styles.saveBtn} onPress={handleSalvarEvento}>
            <Text style={styles.saveBtnText}>Salvar Evento</Text>
          </TouchableOpacity>

          <Modal visible={popupVisible} transparent animationType="fade">
            <View style={styles.popupContainer}>
              <View style={styles.popupBox}>
                <Text style={styles.popupIcon}>✅</Text>
                <Text style={styles.popupText}>Evento criado com sucesso!</Text>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
    marginLeft: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontWeight: '600',
    marginLeft: 15,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#06b6d4',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagSelected: {
    backgroundColor: '#06b6d4',
  },
  tagText: {
    color: '#06b6d4',
  },
  tagTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  saveBtn: {
    backgroundColor: '#facc15',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  saveBtnText: {
    fontWeight: 'bold',
    color: '#1e293b',
    fontSize: 16,
  },
  popupContainer: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  popupIcon: {
    fontSize: 40,
  },
  popupText: {
    fontSize: 18,
    marginTop: 12,
    fontWeight: '600',
  },
});
