import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* TOPO COM ICONE PADRÃO */}
      <View style={styles.header}>
        <View style={styles.iconPlaceholder}>
          <MaterialIcons name="directions-run" size={48} color="#004892" />
        </View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>use sua conta para logar</Text>
      </View>

      {/* FORMULÁRIO */}
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.toggleVisibility}
          >
            <MaterialIcons
              name={passwordVisible ? 'visibility-off' : 'visibility'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {/* BOTÃO DE TESTE PARA PULAR LOGIN */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ccc', marginTop: 10 }]}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={[styles.buttonText, { color: '#000' }]}>Pular Login</Text>
        </TouchableOpacity>
        {/* FIM DO BOTÃO DE TESTE */}

        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueci a senha</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Novo usuário?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('CadastroUsuario')}
          >
            Cadastrar-se
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: '35%',
    backgroundColor: '#b2ebf2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  iconPlaceholder: {
    backgroundColor: '#e0f7fa',
    borderRadius: 16,
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002B5B',
  },
  subtitle: {
    fontSize: 14,
    color: '#002B5B',
    marginTop: 4,
  },
  form: {
    flex: 1,
    padding: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    paddingRight: 12,
  },
  toggleVisibility: {
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#004892',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgot: {
    textAlign: 'center',
    color: '#444',
    fontSize: 14,
    marginBottom: 16,
  },
  registerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#444',
  },
  registerLink: {
    color: '#5B3DF3',
    fontWeight: '600',
  },
});
