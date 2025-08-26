import allApi from "./base";

export const submitResume = async (formData: FormData) => {
  try {
    const response = await allApi.post("/career/resume", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.error("Resume API error:", error);
    throw error;
  }
};
