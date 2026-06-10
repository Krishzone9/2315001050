import { LogPayload } from "./types";

const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

export const sendLog = async (payload: LogPayload): Promise<void> => {
  try {
    await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Logging API Error:", error);
  }
};
