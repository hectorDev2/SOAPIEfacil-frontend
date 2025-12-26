
"use client";

import { GoogleGenAI, Type } from "@google/genai";

/**
 * Service to process clinical transcripts using Gemini 3 Pro.
 * In a real Next.js app, this would be in a 'src/app/actions.ts' file with 'use server'.
 */
export async function generateSoapieFromTranscript(transcript: string) {
  if (!process.env.API_KEY) {
    throw new Error("Missing Gemini API Key");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview", // Usamos Pro para máxima precisión clínica
      contents: `Eres una IA experta en documentación de enfermería. Analiza esta transcripción de una consulta y genera una nota SOAPIE estructurada, profesional y concisa.
      
      Transcripción: "${transcript}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subjective: { type: Type.STRING, description: "Lo que el paciente reporta (Dolor, sensaciones)." },
            objective: { type: Type.STRING, description: "Datos medibles (Signos vitales, examen físico)." },
            analysis: { type: Type.STRING, description: "Diagnóstico de enfermería o juicio clínico." },
            plan: { type: Type.STRING, description: "Pasos a seguir o tratamiento programado." },
            intervention: { type: Type.STRING, description: "Acciones realizadas durante la consulta." },
            evaluation: { type: Type.STRING, description: "Respuesta del paciente a las acciones." }
          },
          required: ["subjective", "objective", "analysis", "plan", "intervention", "evaluation"]
        }
      }
    });

    const data = response.text;
    if (!data) throw new Error("AI returned empty content");
    
    return JSON.parse(data);
  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
}
