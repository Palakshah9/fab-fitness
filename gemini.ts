
import { GoogleGenAI } from "@google/genai";

export const getFitnessAdvice = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the "Fab Fitness AI Assistant", a professional, encouraging, and highly knowledgeable fitness coach. 
        Your goal is to provide concise, science-backed fitness and nutrition advice to members of Fab Fitness, a premium gym in Varanasi, India. 
        Keep responses motivational, luxury-focused, and friendly. Always suggest they visit the gym for hands-on guidance.`,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I'm having trouble thinking of advice right now. Why not head over to the gym and ask one of our pro trainers?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI Coach is taking a breather. Please try again or join us at Fab Fitness in Varanasi!";
  }
};
