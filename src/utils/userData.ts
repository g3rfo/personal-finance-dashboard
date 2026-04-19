import axios from "axios";

const apiURL = import.meta.env.VITE_SERVER_URL;

export const isUserAlreadyExist = async (email: string): Promise<boolean | null> => {
  try {
    const response = await axios.get(`${apiURL}/users`, {
      params: {
        email,
      },
    });

    if (response.status === 200) {
      return response.data.length > 0;
    } else {
      throw new Error("Failed to check user existence");
    }
  } catch (error) {
    console.error("Error checking user existence:", error);
    return null;
  }
};

export const resetData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
};

export const userIdVerification = (userId: string | null) => {
  if (!userId || typeof userId !== "string") {
    resetData();
    throw new Error("User verification failed");
  }
};
