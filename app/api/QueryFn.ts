import axios from "axios";
import { postRequest } from "./Axois";

export const postQuery = async (url: string, data: unknown) => {
  try {
    const response = await postRequest(url, data)
    if (response.status === 200 || response.status === 201) {
        console.log("Response data:", response.data);
        return response.data;
      }
      throw new Error(`Request failed with status ${response.status}`);
  }
   catch (error) {
    console.error('Error:', error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error message:", error.message);
      console.error("Axios response data:", error.response?.data);
      console.error("Axios status:", error.response?.status);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}