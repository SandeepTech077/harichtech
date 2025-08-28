import axios from "axios";

// 🔹 Axios Instance
const base = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Email message
export const sendEmailMessage = async (formState: {
  name: string;
  email: string;
  phone: string;
  country: string;
  budget: string;
  customBudget: string;
  description: string;
}) => {
  try {
    const response = await base.post(
      process.env.NEXT_PUBLIC_EMAIL_API || "/email",
      formState
    );
    return { ok: response.status === 200, result: response.data };
  } catch (error) {
    console.error("Email API error:", error);
    throw error;
  }
};

// 🔹 Footer message
export const sendFooterMessage = async (FooterState: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const response = await base.post(
      process.env.NEXT_PUBLIC_FOOTER_API || "/get",
      FooterState
    );
    return { ok: response.status === 200, result: response.data };
  } catch (error) {
    console.error("Footer API error:", error);
    throw error;
  }
};

// 🔹 Resume upload
export const submitResume = async (formData: FormData) => {
  try {
    const response = await base.post(
      process.env.NEXT_PUBLIC_RESUME_API || "/career/resume",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return response;
  } catch (error) {
    console.error("Resume API error:", error);
    throw error;
  }
};

export default base;
