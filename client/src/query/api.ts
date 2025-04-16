import axios from "axios";

export interface UserMessage {
  message: string;
}

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sentMessage = async (message: UserMessage) => {
  try {
    const response = await api.post("ai/message", message, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
