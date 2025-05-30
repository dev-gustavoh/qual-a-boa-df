import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';

export default function TelaDetalhesEvento({ route, navigation }) {
  const { evento } = route.params;
  const [popupVisible, setPopupVisible] = useState(false);

  const handleMarcarEvento = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
      navigation.navigate('EventoMarcado');
    }, 2000);
  };

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
        </View>

        <View style={styles.centerButtonWrapper}>
          <TouchableOpacity style={styles.markButton} onPress={handleMarcarEvento}>
            <Text style={styles.markButtonText}>Marcar</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={popupVisible} transparent animationType="fade">
          <View style={styles.popupContainer}>
            <View style={styles.popupBox}>
              <Text style={styles.popupIcon}>✅</Text>
              <Text style={styles.popupText}>Evento Marcado!</Text>
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
  centerButtonWrapper: {
    alignItems: 'center',
    marginBottom: 32,
  },
  markButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  markButtonText: {
    color: '#001F54',
    fontWeight: 'bold',
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
