import allApi from "./base";

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
    const response = await allApi.post("/email", formState);
    return { ok: response.status === 200, result: response.data };
  } catch (error: any) {
    console.error("Email API error:", error);
    throw error;
  }
};
