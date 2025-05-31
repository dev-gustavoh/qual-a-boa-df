const BASE_URL = "http://192.168.0.6:8080";  // Altere para a URL correta da sua API

export async function getCategorias() {
    try {
        const response = await fetch(`${BASE_URL}/categorias`);
        const data = await response.json();
        console.log("✅ Categorias recebidas:", data);
        return data;
    } catch (error) {
        console.error("❌ Erro real ao buscar categorias:", error);
        throw error;
    }
}
