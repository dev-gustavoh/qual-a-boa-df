const BASE_URL = "http://192.168.0.6:8080"; // 

export async function login(email, senha) {
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

    return data;
}
