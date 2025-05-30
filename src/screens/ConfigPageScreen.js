
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function ConfigPageScreen({ navigation }) {
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(false);
  const [tema, setTema] = useState('claro');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Configurações</Text>

        <Text style={styles.sectionLabel}>Preferências</Text>
        <View style={styles.optionRow}>
          <Ionicons name="notifications-outline" size={20} color="#FFD700" />
          <Text style={styles.optionText}>Notificações</Text>
          <Switch
            value={notificacoesAtivas}
            onValueChange={setNotificacoesAtivas}
          />
        </View>

        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>Aparência</Text>
        <View style={styles.themeToggleRow}>
          <TouchableOpacity
            style={[styles.themeButton, tema === 'claro' && styles.activeTheme]}
            onPress={() => setTema('claro')}
          >
            <Text style={styles.themeText}>☀️ Claro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.themeButton, tema === 'escuro' && styles.activeTheme]}
            onPress={() => setTema('escuro')}
          >
            <Text style={styles.themeText}>🌙 Escuro</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>Sobre</Text>
        <TouchableOpacity style={styles.infoCard}>
          <FontAwesome name="info-circle" size={18} color="#FFD700" />
          <Text style={styles.infoText}>Termos de Uso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoCard}>
          <FontAwesome name="shield" size={18} color="#FFD700" />
          <Text style={styles.infoText}>Política de Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoCard}>
          <Ionicons name="help-circle-outline" size={18} color="#FFD700" />
          <Text style={styles.infoText}>Ajuda e Suporte</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.versionText}>Versão do Aplicativo</Text>
          <Text style={styles.versionNumber}>v2.0.0</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
  },
  scrollContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    marginTop:50,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ccc',
    marginBottom: 8,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#002855',
    padding: 16,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  themeToggleRow: {
    flexDirection: 'row',
    gap: 10,
  },
  themeButton: {
    flex: 1,
    backgroundColor: '#002855',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  activeTheme: {
    backgroundColor: '#0055ff',
  },
  themeText: {
    color: '#fff',
    fontWeight: '600',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#002855',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  versionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  versionNumber: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  logoutText: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
});
