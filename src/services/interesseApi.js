// Interesse API (services/interesseApi.js)

const BASE_URL = 'http://192.168.0.6:8080';

export const getInteresses = async (idUsuario) => {
    const response = await fetch(`${BASE_URL}/interesses/${idUsuario}`);
    const data = await response.json();
    return data;
};

export const marcarInteresse = async (idUsuario, idEvento) => {
    const response = await fetch(`${BASE_URL}/interesses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idUsuario, idEvento }),
    });

    if (!response.ok) {
        throw new Error('Erro ao marcar interesse');
    }

    return response.json();
};

export const desmarcarInteresse = async (idUsuario, idEvento) => {
    const interesses = await getInteresses(idUsuario);
    const interesse = interesses.find(i => i.idEvento === idEvento);

    const response = await fetch(`${BASE_URL}/interesses/${interesse.id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Erro ao desmarcar interesse');
    }

    return response.json();
};
