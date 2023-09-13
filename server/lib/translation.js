import CHATGPT_API_KEY from "./constants.js";
import { openAIclient } from "./gptClient.js";
const gptTransalte = async (sourceLanguage, targetLanguage, text) => {
  
  
  const response = await openAIclient.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You will be provided with a sentence in ${sourceLanguage}, 
        and your task is to translate it into  ${targetLanguage}.`,
      },
      {
        role: "assistant",
        content: text,
      },
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const translatedText = response.data.choices[0].message.content.trim()
  return translatedText;
};

export default gptTransalte;
