import { apiRequest } from "@/services/api";

export type AuthUser = { id: string; fullName: string; email: string; role: "admin" | "store_keeper" | "manager" };
export type AuthResponse = { accessToken: string; user: AuthUser };

type LoginPayload = { email: string; password: string; remember: boolean };
type RegisterPayload = { fullName: string; email: string; phone: string; password: string };

function persistSession(response: AuthResponse, remember: boolean) {
  if (typeof window === "undefined") return;
  const storage = remember ? window.localStorage : window.sessionStorage;
  storage.setItem("elroyy_access_token", response.accessToken);
  storage.setItem("elroyy_user", JSON.stringify(response.user));
}

function clearOtherSessionStorage() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem("elroyy_access_token");
  window.localStorage.removeItem("elroyy_user");
  window.sessionStorage.removeItem("elroyy_access_token");
  window.sessionStorage.removeItem("elroyy_user");
}

export const authService = {
  async login(payload: LoginPayload) {
    const response = await apiRequest<AuthResponse>("/auth/login", { method: "POST", body: JSON.stringify(payload) });
    clearOtherSessionStorage();
    persistSession(response, payload.remember);
    return response;
  },
  async register(payload: RegisterPayload) {
    return apiRequest<AuthResponse>("/auth/register", { method: "POST", body: JSON.stringify(payload) });
  },
  logout() {
    clearOtherSessionStorage();
  },
};
