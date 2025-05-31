const BASE_URL = "http://192.168.0.6:8080"; // ajuste conforme seu IP local

export async function criarEvento(eventoData) {
    const response = await fetch(`${BASE_URL}/eventos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventoData),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ao criar evento: ${errorText}`);
    }

    return await response.json();
}
