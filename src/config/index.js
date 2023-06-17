import dotenv from "dotenv";

dotenv.config();
const config = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  PLATZI_FAKE_API_BASE_URL: process.env.PLATZI_FAKE_API_BASE_URL,
};

export default config;
