import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CriarDesempenhoScreen() {
  const [eventoSelecionado, setEventoSelecionado] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const [tempoProva, setTempoProva] = useState('');
  const [pontos, setPontos] = useState('');
  const [dificuldade, setDificuldade] = useState('Fácil');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const navigation = useNavigation();

  const eventos = [
    'Corrida no Parque',
    'Natação Clube',
    'Futebol Society',
    'Basquete do Gama',
    'Vôlei da Ceilândia',
  ];

  const handleSelectEvento = (evento) => {
    setEventoSelecionado(evento);
    setMostrarModal(false);
  };

  const handleCriar = () => {
    console.log({
      eventoSelecionado,
      tempoProva,
      pontos,
      dificuldade,
      descricao,
      data,
      hora,
    });
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
      navigation.navigate('TelaDesempenho');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Criar Desempenho</Text>
        <Text style={styles.subHeader}>
          Por favor, complete o formulário abaixo para continuar
        </Text>

        <Text style={styles.label}>Selecione o Evento</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setMostrarModal(true)}
        >
          <Text style={styles.dropdownText}>
            {eventoSelecionado || 'Toque para selecionar'}
          </Text>
        </TouchableOpacity>

        <Modal visible={mostrarModal} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Escolha um evento</Text>
              <FlatList
                data={eventos}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => handleSelectEvento(item)}
                  >
                    <Text style={styles.modalItemText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity onPress={() => setMostrarModal(false)}>
                <Text style={styles.cancelBtn}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TextInput
          style={styles.input}
          placeholder="Tempo de Prova"
          value={tempoProva}
          onChangeText={setTempoProva}
        />

        <TextInput
          style={styles.input}
          placeholder="Pontos"
          keyboardType="numeric"
          value={pontos}
          onChangeText={setPontos}
        />

        <Text style={styles.label}>Dificuldade</Text>
        <View style={styles.difficultyRow}>
          {['Fácil', 'Médio', 'Difícil'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.difficultyBtn,
                dificuldade === item && styles.selectedDifficulty,
              ]}
              onPress={() => setDificuldade(item)}
            >
              <Text
                style={[
                  styles.difficultyText,
                  dificuldade === item && styles.selectedText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Descrição do Desempenho</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Por favor, descreva como foi seu desempenho..."
          multiline
          value={descricao}
          onChangeText={setDescricao}
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 8 }]}
            placeholder="Data (ex: 04/06/2025)"
            value={data}
            onChangeText={setData}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Hora (ex: 18:00)"
            value={hora}
            onChangeText={setHora}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCriar}>
          <Text style={styles.buttonText}>Criar Desempenho</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={popupVisible} transparent animationType="fade">
        <View style={styles.popupContainer}>
          <View style={styles.popupBox}>
            <Text style={styles.popupIcon}>✅</Text>
            <Text style={styles.popupText}>Desempenho Adicionado!</Text>
          </View>
        </View>
      </Modal>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  subHeader: {
    color: '#ccc',
    marginBottom: 24,
  },
  label: {
    color: 'white',
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dropdownText: {
    color: '#444',
  },
  difficultyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  difficultyBtn: {
    flex: 1,
    backgroundColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  selectedDifficulty: {
    backgroundColor: '#0ea5e9',
  },
  difficultyText: {
    fontWeight: '600',
  },
  selectedText: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#facc15',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#1e293b',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  modalItem: {
    paddingVertical: 12,
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  cancelBtn: {
    textAlign: 'center',
    marginTop: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
  popupContainer: {
    flex: 1,
    backgroundColor: '#00000099',
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
