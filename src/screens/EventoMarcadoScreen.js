import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useEventos } from '../context/EventosContext';

export default function EventosMarcadosScreen() {
  const { eventosMarcados } = useEventos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Marcados</Text>
      <FlatList
        data={eventosMarcados}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>📅 {item.date}</Text>
            <Text style={styles.eventLocation}>📍 {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#003366',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 14,
    marginTop: 6,
  },
  eventLocation: {
    fontSize: 14,
    marginTop: 2,
  },
});
