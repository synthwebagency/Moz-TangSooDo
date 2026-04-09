import { GoogleGenAI } from "@google/genai";

// Use VITE_API_KEY for Vercel/Client-side deployment as requested by the user.
// In AI Studio, this will fall back to the provided key in .env
const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  console.warn("VITE_API_KEY is not set. Gemini features will not work.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function getLocationInfo() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Dá-me informações detalhadas sobre a localização da academia MozTangSooDo em Maputo, Moçambique (Avenida Maria Lurdes Mutola, Malhazine). Inclui pontos de referência próximos e como chegar lá.",
      config: {
        tools: [{ googleMaps: {} }],
      },
    });
    
    // Accessing .text property directly as per SDK guidelines
    return response.text || "Informação de localização não disponível no momento.";
  } catch (error) {
    console.error("Erro ao obter informações de localização via Gemini:", error);
    return "Não foi possível carregar os detalhes da localização. Por favor, tente novamente mais tarde.";
  }
}
