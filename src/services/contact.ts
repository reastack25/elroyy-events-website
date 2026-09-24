import { apiRequest } from "@/services/api";

export type ContactPayload = { name: string; email: string; phone: string; subject: string; message: string };
export type ContactResponse = { id: string; message: string };

export const contactService = {
  submit: (payload: ContactPayload) => apiRequest<ContactResponse>("/contact", { method: "POST", body: JSON.stringify(payload) }),
};
