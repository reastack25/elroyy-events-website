import { apiRequest } from "@/services/api";

export type AuthUser = { id: string; fullName: string; email: string; role: "admin" | "store_keeper" | "manager" };
export type AuthResponse = { accessToken: string; user: AuthUser };

export const authService = {
  login: (payload: { email: string; password: string; remember: boolean }) => apiRequest<AuthResponse>("/auth/login", { method: "POST", body: JSON.stringify(payload) }),
  register: (payload: { fullName: string; email: string; phone: string; password: string }) => apiRequest<AuthResponse>("/auth/register", { method: "POST", body: JSON.stringify(payload) }),
};
