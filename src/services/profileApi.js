import { httpClient } from "./apiInstance";

export const updateProfile = async (data) => {
    console.log("tje...",data);
  try {

    const response = await httpClient.post('/auth/update-profile', data);
    return response.data
    // Reset the form
  } catch (error) {
    throw error
  }
};