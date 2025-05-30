import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')} // Sua imagem de fundo
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.centerContainer}>
        <Image
          source={require('../../assets/images/logo.png')} // Sua logo
          style={styles.logo}
        />
        <Text style={styles.title}>Junte-se e</Text>
        <Text style={styles.title}>comece se exercitar</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>📧 Logar com o e-mail</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem uma conta?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('CadastroUsuario')}
          >
            Cadastre-se
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: height * 0.15,
  },
  logo: {
    width: 290,
    height: 350,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  footer: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 28,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    marginTop: 16,
    fontSize: 14,
    color: '#444',
  },
  registerLink: {
    color: '#004892',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
