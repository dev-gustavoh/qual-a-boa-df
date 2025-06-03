import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function EventosMarcadosScreen() {
  // Listagem dos esportes com seus respectivos status e datas
  const esportesHoje = [
    { nome: 'Futebol', data: '4 de maio de 2023', status: 'Marcar' },
    { nome: 'Basquete', data: '4 de maio de 2023', status: 'Marcar' },
  ];

  const esportesPassados = [
    { nome: 'Vôlei', data: '4 de maio de 2023', status: 'Em andamento' },
    { nome: 'Tênis', data: '4 de maio de 2023', status: 'Em andamento' },
    { nome: 'Futebol', data: '4 de maio de 2023', status: 'Finalizado' },
    { nome: 'Basquete', data: '4 de maio de 2023', status: 'Finalizado' },
  ];

  // Função para renderizar cada card de esporte
  const renderCard = (esporte) => (
      <View key={esporte.nome} style={styles.card}>
        <View>
          <Text style={styles.eventTitle}>{esporte.nome}</Text>
          <Text style={styles.eventDate}>Esporte marcado para {esporte.data}</Text>
        </View>
        <TouchableOpacity style={[styles.statusButton, styles[esporte.status.replace(" ", "").toLowerCase()]]}>
          <Text style={styles.statusText}>{esporte.status}</Text>
        </TouchableOpacity>
      </View>
  );

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Esportes Marcados</Text>

        <Text style={styles.sectionTitle}>Hoje</Text>
        {esportesHoje.map(renderCard)}

        <Text style={styles.sectionTitle}>Esportes passados</Text>
        {esportesPassados.map(renderCard)}
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
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 12,
    color: '#777',
  },
  statusButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  marcar: {
    backgroundColor: '#d1fae5',
  },
  emandamento: {
    backgroundColor: '#fed7aa',
  },
  finalizado: {
    backgroundColor: '#ddd6fe',
  },
});
