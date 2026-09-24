import { apiRequest } from "@/services/api";

export type QuotationPayload = { fullName: string; company?: string; email: string; phone: string; eventType: string; eventDate: string; location: string; guests: number; services: string; equipment?: string; budget: string; additional?: string };
export type QuotationResponse = { id: string; message: string };

export const quotationService = {
  submit: (payload: QuotationPayload) => apiRequest<QuotationResponse>("/quotations", { method: "POST", body: JSON.stringify(payload) }),
};
