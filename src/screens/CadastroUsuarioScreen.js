import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CadastroUsuarioScreen({ navigation }) {
  const [error, setError] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Criar Conta</Text>

      {/* Avatar + Botão adicionar imagem */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarPlaceholder}>
          <MaterialIcons name="person" size={50} color="#ccc" />
        </View>
        <TouchableOpacity style={styles.addImageButton}>
          <MaterialIcons name="add-a-photo" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <MaterialIcons name="person" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Nome Completo" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <MaterialIcons name="email" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <MaterialIcons name="lock" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
          <MaterialIcons name="visibility-off" size={20} color="#aaa" />
        </View>

        <View style={styles.inputGroup}>
          <MaterialIcons name="lock" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Confirmar Senha" secureTextEntry style={styles.input} />
          <MaterialIcons name="visibility-off" size={20} color="#aaa" />
        </View>

        <View style={styles.inputGroup}>
          <MaterialIcons name="phone" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Telefone" keyboardType="phone-pad" style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <MaterialIcons name="badge" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="CPF" keyboardType="numeric" style={styles.input} />
        </View>

        {/* Botão cadastrar */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setError(true)} // Troque por chamada real
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Link login */}
        <Text style={styles.loginText}>
          Já possui uma conta?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Entrar
          </Text>
        </Text>

        {/* Mensagem de erro */}
        {error && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>❗ Erro ao realizar cadastro</Text>
            <Text style={styles.errorSub}>Verifique os dados informados e tente novamente</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004892',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginVertical: 12,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 110,
    backgroundColor: '#4BA3FF',
    borderRadius: 999,
    padding: 6,
  },
  form: {
    marginTop: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 8,
  },
  button: {
    backgroundColor: '#FFD233',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 16,
  },
  loginLink: {
    color: '#FFD233',
    fontWeight: 'bold',
  },
  errorBox: {
    backgroundColor: '#ffcccc',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  errorText: {
    color: '#A80000',
    fontWeight: 'bold',
  },
  errorSub: {
    color: '#A80000',
    fontSize: 12,
  },
});
