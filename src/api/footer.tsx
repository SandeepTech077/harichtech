import allApi from "./base";

export const sendFooterMessage = async (FooterState: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const response = await allApi.post("/get", FooterState);
    return { ok: response.status === 200, result: response.data };
  } catch (error: any) {
    console.error("Footer API error:", error);
    throw error;
  }
};
