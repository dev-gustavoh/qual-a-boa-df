import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CriarEventoScreen() {
  const navigation = useNavigation();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  const categorias = ['Futebol', 'Basquete', 'Skate', 'Vôlei'];

  const handleSalvarEvento = () => {
    console.log({
      titulo,
      descricao,
      data,
      local,
      categoria: categoriaSelecionada,
    });

    setPopupVisible(true);

    setTimeout(() => {
      setPopupVisible(false);
      navigation.navigate('Inicio'); // redireciona para Home
    }, 2000);
  };

  const toggleCategoria = (categoria) => {
    setCategoriaSelecionada(prev =>
      prev === categoria ? '' : categoria
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Criar Evento</Text>
        <Text style={styles.subHeader}>Por favor, complete o formulário abaixo.</Text>

        <TextInput
          style={styles.input}
          placeholder="Evento..."
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Descrição..."
          multiline
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Categoria</Text>
        <View style={styles.tagsRow}>
          {categorias.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.tag,
                categoriaSelecionada === cat && styles.tagSelected,
              ]}
              onPress={() => toggleCategoria(cat)}
            >
              <Text
                style={[
                  styles.tagText,
                  categoriaSelecionada === cat && styles.tagTextSelected,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Selecione a Data"
          value={data}
          onChangeText={setData}
        />

        <TextInput
          style={styles.input}
          placeholder="Onde será realizado o evento"
          value={local}
          onChangeText={setLocal}
        />

        <View style={styles.uploadRow}>
          <View style={styles.uploadIconBox}>
            <MaterialIcons name="image" size={36} color="#ccc" />
          </View>
          <TouchableOpacity style={styles.uploadBtn}>
            <Text style={styles.uploadBtnText}>Upload de Imagem</Text>
          </TouchableOpacity>
        </View>

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
  subHeader: {
    color: '#ccc',
    marginBottom: 24,
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
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  uploadIconBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#fff',
  },
  uploadBtn: {
    backgroundColor: '#e0f2fe',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  uploadBtnText: {
    color: '#007aff',
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
