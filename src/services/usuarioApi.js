const BASE_URL = 'http://192.168.0.6:8080'; // URL da API

// Função para buscar os dados do usuário pelo ID
export const getUsuario = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/usuarios/${userId}`); // Faz a requisição para o novo endpoint
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.erro || 'Erro ao carregar os dados do usuário');
        }

        return data; // Retorna os dados do usuário
    } catch (error) {
        console.error("Erro ao carregar dados do usuário", error);
        throw error;
    }
};
