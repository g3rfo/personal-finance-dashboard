import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const isUserAlreadyExist = async (email: string): Promise<boolean> => {
  try {
    const response = await axios.get(`${apiURL}/users`, {
      params: {
        email,
      },
    });
    return response.data.length > 0;
  } catch (error) {
    console.error("Error checking user existence:", error);
    return true;
  }
};