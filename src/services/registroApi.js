// src/services/registroApi.js

const BASE_URL = "http://192.168.0.6:8080"; // ajuste se necessário

export async function registrarUsuario(data) {
    const response = await fetch(`${BASE_URL}/autenticacao/registrar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Erro ao registrar usuário');
    }

    return await response.text(); // ou .json() se o backend retornar JSON
}
