import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function InicioScreen() {
  const navigation = useNavigation();

  const handleEventoPress = (evento) => {
    navigation.navigate('DetalhesEvento', { evento });
  };

  const eventosSugeridos = [
    {
      titulo: 'Judô',
      subtitulo: 'Aulas para iniciantes e avançados',
      data: 'Terça e Quinta',
      horario: '18h - 20h',
      endereco: 'Centro Esportivo Y, Asa Norte',
      cidade: 'Brasília - DF',
      imagem: require('../../assets/images/judo.jpg'),
      amigos: [],
    },
    {
      titulo: 'Crossfit',
      subtitulo: 'Aulas ao ar livre',
      data: 'Segunda a Sexta',
      horario: '07h - 08h',
      endereco: 'Parque da Cidade',
      cidade: 'Brasília - DF',
      imagem: require('../../assets/images/crossfit.jpg'),
      amigos: [],
    },
    {
      titulo: 'Yoga',
      subtitulo: 'Prática em grupo',
      data: 'Domingo',
      horario: '17h - 18h',
      endereco: 'Eixão Norte',
      cidade: 'Brasília - DF',
      imagem: require('../../assets/images/yoga.jpg'),
      amigos: [],
    },
  ];

  const eventosFavoritos = [
    {
      titulo: 'Futsal',
      subtitulo: 'Jogo de futsal entre amigos',
      data: 'Quarta',
      horario: '09:30',
      endereco: 'Quadra Poliesportiva da 308 Sul',
      cidade: 'Brasília - DF',
      imagem: require('../../assets/images/futsal.jpg'),
      amigos: [],
    },
    {
      titulo: 'Natação',
      subtitulo: 'Treino livre de natação',
      data: 'Sábado',
      horario: '09:30',
      endereco: 'Piscina Pública da UNB',
      cidade: 'Brasília - DF',
      imagem: require('../../assets/images/natacao.jpg'),
      amigos: [],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Sugestões</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CriarEvento')}
            style={styles.criarEventoBtn}
          >
            <Text style={styles.criarEventoText}>+ Criar Evento</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {eventosSugeridos.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.card, { width: width * 0.8 }]}
              onPress={() => handleEventoPress(item)}
            >
              <Image source={item.imagem} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitulo}</Text>
              <Text style={styles.cardDate}>📅 {item.data}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Favoritos</Text>
        {eventosFavoritos.map((fav, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.card, styles.favCard, { width: '100%' }]}
            onPress={() => handleEventoPress(fav)}
          >
            <Image source={fav.imagem} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{fav.titulo}</Text>
            <Text style={styles.cardDate}>📅 {fav.data} às {fav.horario}</Text>
          </TouchableOpacity>
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
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  criarEventoBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  criarEventoText: {
    color: '#003366',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  carousel: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    backgroundColor: '#004080',
  },
  favCard: {
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'white',
    marginVertical: 4,
  },
  cardDate: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
});
