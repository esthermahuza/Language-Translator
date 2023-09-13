import { Configuration, OpenAIApi } from "openai";
import CHATGPT_API_KEY from "./constants.js";

const configuration = new Configuration({
  apiKey: CHATGPT_API_KEY,
});

export const openAIclient = new OpenAIApi(configuration);
