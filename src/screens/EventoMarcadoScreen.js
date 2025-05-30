import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function EventosMarcadosScreen() {
  const eventosHoje = [
    { nome: 'ScreenStudio App', data: '4 de maio de 2023', status: 'Marcar' },
    { nome: 'Slack Ltd', data: '4 de maio de 2023', status: 'Marcar' },
  ];

  const eventosPassados = [
    { nome: 'Dribbble LTD.', data: '4 de maio de 2023', status: 'Em andamento' },
    { nome: 'FlutterFlow', data: '4 de maio de 2023', status: 'Em andamento' },
    { nome: 'ScreenStudio App', data: '4 de maio de 2023', status: 'Finalizado' },
    { nome: 'Slack Ltd', data: '4 de maio de 2023', status: 'Finalizado' },
  ];

  const renderCard = (evento) => (
    <View key={evento.nome} style={styles.card}>
      <View>
        <Text style={styles.eventTitle}>{evento.nome}</Text>
        <Text style={styles.eventDate}>Evento Marcado em {evento.data}</Text>
      </View>
      <TouchableOpacity style={[styles.statusButton, styles[evento.status.replace(" ", "").toLowerCase()]]}>
        <Text style={styles.statusText}>{evento.status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Eventos Marcados</Text>

      <Text style={styles.sectionTitle}>Hoje</Text>
      {eventosHoje.map(renderCard)}

      <Text style={styles.sectionTitle}>Eventos passados</Text>
      {eventosPassados.map(renderCard)}
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
    marginTop:50,
    marginBottom: 6,
  },
  subheader: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 20,
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
