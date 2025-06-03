import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://192.168.0.6:8080"; // URL do seu backend

export async function login(email, senha) {
    if (!email || !senha) {
        throw new Error("Por favor, preencha o email e a senha.");
    }

    const response = await fetch(`${BASE_URL}/autenticacao/email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.erro || 'Erro desconhecido no login');
    }

    // Armazena os dados completos do usuário e o userId no AsyncStorage
    await AsyncStorage.setItem('userData', JSON.stringify(data.usuario));  // Armazena o objeto "usuario"
    await AsyncStorage.setItem('userId', data.usuario.id.toString()); // Armazena o ID do usuário

    return data; // Retorna os dados completos
}
