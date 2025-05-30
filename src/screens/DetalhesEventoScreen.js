
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function TelaDetalhesEvento({ route, navigation }) {
  const { evento } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <Text style={styles.header}>Detalhes do Evento</Text>

        <Text style={styles.eventTitle}>{evento.titulo}</Text>

        <Image source={evento.imagem} style={styles.image} />

        <Text style={styles.eventSubtitle}>{evento.subtitulo}</Text>
        <Text style={styles.dateTime}>
          📅 {evento.data}  |  🕒 {evento.horario}
        </Text>

        <View style={styles.localBox}>
          <Text style={styles.localTitle}>Local do Evento</Text>
          <Text style={styles.localAddress}>{evento.endereco}</Text>
          <Text style={styles.localCity}>{evento.cidade}</Text>

          <View style={styles.spotsBox}>
            <Text style={styles.detailsButton}>Detalhes</Text>
            <Text style={styles.spotsText}>249 spots remaining</Text>
          </View>
        </View>

        <Text style={styles.participantesTitle}>Amigos Participando</Text>
        <View style={styles.avatarRow}>
          {evento.amigos.map((img, idx) => (
            <Image key={idx} source={img} style={styles.avatar} />
          ))}
        </View>

        <TouchableOpacity style={styles.markButton}>
          <Text style={styles.markButtonText}>Marcar Evento</Text>
        </TouchableOpacity>
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
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 16,
  },
  eventSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  dateTime: {
    color: '#fbbf24',
    fontWeight: '600',
    marginBottom: 16,
  },
  localBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  localTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  localAddress: {
    fontSize: 14,
    fontWeight: '600',
  },
  localCity: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  spotsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsButton: {
    backgroundColor: '#10b981',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 14,
    overflow: 'hidden',
  },
  spotsText: {
    fontSize: 12,
    color: '#555',
  },
  participantesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  avatarRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  markButton: {
    backgroundColor: '#001F54',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  markButtonText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
