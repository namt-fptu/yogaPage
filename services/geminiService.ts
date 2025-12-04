import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize the client safely. If no key is present, the app should handle it gracefully or mock it.
const ai = new GoogleGenAI({ apiKey });

export const getYogaAdvice = async (userQuery: string): Promise<string> => {
  try {
    if (!apiKey) {
      return "Xin lỗi, hệ thống AI chưa được cấu hình (thiếu API Key). Hãy thử lại sau.";
    }

    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      Bạn là 'Yogi AI', một trợ lý ảo am hiểu về Yoga, thiền định và sức khỏe tinh thần. 
      Hãy trả lời ngắn gọn, thân thiện bằng tiếng Việt.
      Nhiệm vụ của bạn là gợi ý 1-2 tư thế yoga hoặc bài tập thở phù hợp với tâm trạng hoặc vấn đề sức khỏe của người dùng.
      Luôn nhắc người dùng lắng nghe cơ thể mình.
      Không đưa ra lời khuyên y tế chuyên sâu, chỉ gợi ý bài tập nhẹ nhàng.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "Xin lỗi, tôi không thể đưa ra câu trả lời lúc này.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với trợ lý ảo. Vui lòng thử lại sau.";
  }
};
