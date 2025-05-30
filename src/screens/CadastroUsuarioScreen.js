import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CadastroUsuarioScreen({ navigation }) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCadastro = () => {
    // Simula cadastro com sucesso
    setError(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigation.navigate('Login');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Criar Conta</Text>

      <View style={styles.avatarContainer}>
        <View style={styles.avatarPlaceholder}>
          <MaterialIcons name="person" size={50} color="#ccc" />
        </View>
        <TouchableOpacity style={styles.addImageButton}>
          <MaterialIcons name="add-a-photo" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

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

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Já possui uma conta?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
            Entrar
          </Text>
        </Text>

        {error && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>❗ Erro ao realizar cadastro</Text>
            <Text style={styles.errorSub}>
              Verifique os dados informados e tente novamente
            </Text>
          </View>
        )}
      </View>

      {/* Popup de sucesso */}
      <Modal visible={success} transparent animationType="fade">
        <View style={styles.popupContainer}>
          <View style={styles.popupBox}>
            <Text style={styles.popupIcon}>✅</Text>
            <Text style={styles.popupText}>Cadastro realizado com sucesso!</Text>
          </View>
        </View>
      </Modal>
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
