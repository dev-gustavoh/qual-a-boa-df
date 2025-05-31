const BASE_URL = "http://192.168.0.6:8080";

export async function getEventos() {
    try {
        const response = await fetch(`${BASE_URL}/eventos`);
        const data = await response.json();
        console.log("✅ Eventos recebidos:", data);
        return data;
    } catch (error) {
        console.error("❌ Erro real ao buscar eventos:", error);
        throw error;
    }
}
