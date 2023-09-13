import dotenv from "dotenv";
dotenv.config();

if (!process.env.CHATGPT_API_KEY) {
  throw new Error("missing CHATGPT_API_KEY credentials");
}

const CHATGPT_API_KEY = process.env.CHATGPT_API_KEY;

export default CHATGPT_API_KEY;
