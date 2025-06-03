const BASE_URL = 'http://192.168.0.6:8080';

export const getInteresses = async (idUsuario) => {
    try {
        const response = await fetch(`${BASE_URL}/interesses/${idUsuario}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar os interesses');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao carregar interesses", error);
        throw error;
    }
};

export const marcarInteresse = async (idUsuario, idEvento) => {
    try {
        const response = await fetch(`${BASE_URL}/interesses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idUsuario, idEvento }),
        });

        if (!response.ok) {
            throw new Error('Erro ao marcar interesse');
        }

        return response.json();
    } catch (error) {
        console.error("Erro ao marcar interesse", error);
        throw error;
    }
};

export const desmarcarInteresse = async (idUsuario, idEvento) => {
    try {
        const interesses = await getInteresses(idUsuario);
        const interesse = interesses.find(i => i.idEvento === idEvento);

        if (!interesse) {
            throw new Error('Interesse não encontrado');
        }

        const response = await fetch(`${BASE_URL}/interesses/${interesse.id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Erro ao desmarcar interesse');
        }

        return response.json();
    } catch (error) {
        console.error("Erro ao desmarcar interesse", error);
        throw error;
    }
};
