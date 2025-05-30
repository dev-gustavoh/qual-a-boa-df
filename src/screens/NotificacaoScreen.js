import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function NotificacaoScreen() {
  const notificacoes = [
    { titulo: 'Atualização do Sistema', data: 'Mar 8, 2022', lida: false },
    { titulo: 'Check-in Feito', data: 'Mar 8, 2022', lida: false },
    { titulo: 'Novo evento do seu interesse', data: 'Mar 8, 2022', lida: false },
    { titulo: 'Novo evento adicionado no seu calendário', data: 'Mar 8, 2022', lida: true },
    { titulo: 'Perfil alterado', data: 'Mar 8, 2022', lida: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notificações</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {notificacoes.map((noti, idx) => (
          <View key={idx} style={[styles.card, noti.lida && styles.cardLida]}>
            <View
              style={[
                styles.line,
                { backgroundColor: noti.lida ? '#ccc' : '#facc15' },
              ]}
            />
            <Text
              style={[
                styles.titulo,
                noti.lida && styles.textoLido,
              ]}
            >
              {noti.titulo}
            </Text>
            <Text
              style={[
                styles.data,
                noti.lida && styles.textoLido,
              ]}
            >
              {noti.data}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 20,
    marginLeft: 20,
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#002B5B',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLida: {
    backgroundColor: '#001f3f',
  },
  line: {
    width: 4,
    height: '100%',
    marginRight: 12,
    borderRadius: 2,
  },
  titulo: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  data: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 12,
  },
  textoLido: {
    color: '#888',
  },
});
