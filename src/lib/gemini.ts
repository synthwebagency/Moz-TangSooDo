import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getLocationInfo() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Dá-me informações detalhadas sobre a localização da academia MozTangSooDo em Maputo, Moçambique (Avenida Maria Lurdes Mutola, Malhazine). Inclui pontos de referência próximos e como chegar lá.",
      config: {
        tools: [{ googleMaps: {} }],
      },
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao obter informações de localização via Gemini:", error);
    return null;
  }
}
