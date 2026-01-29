
import { GoogleGenAI } from "@google/genai";
import { RealTimeData } from "../types";

const API_KEY = "AIzaSyChRn-e2ZpxMBc57MC5hr16Ec8GyGDKYTo" ;

export const getAIAnalysis = async (data: RealTimeData, userQuery?: string) => {
  if (!API_KEY) return "Veuillez configurer votre clé API pour bénéficier des analyses IA.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const prompt = userQuery 
    ? `L'agriculteur demande : "${userQuery}". Voici les données actuelles de la ferme : Humidité ${data.humidity}, Température ${data.temperature}, pH du sol ${data.soil_ph}. Répondez de manière professionnelle et technique.`
    : `En tant qu'expert agronome numérique pour le projet ARDHI, analysez ces données : Humidité ${data.humidity}, Température ${data.temperature}, Azote ${data.nitrogen}, pH ${data.soil_ph}. Donnez 3 points clés d'optimisation pour un investisseur. Répondez en français.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert en agriculture de précision de haut niveau pour ARDHI. Tu fournis des analyses techniques, précises et axées sur le rendement financier et écologique.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de l'analyse IA. Veuillez réessayer plus tard.";
  }
};
