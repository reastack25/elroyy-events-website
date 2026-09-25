export type SessionUser = {
  id: string;
  fullName: string;
  email: string;
  role: "admin" | "store_keeper" | "manager";
};

export function getStoredAuthValue<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  const localValue = window.localStorage.getItem(key);
  if (localValue) return JSON.parse(localValue) as T;
  const sessionValue = window.sessionStorage.getItem(key);
  if (sessionValue) return JSON.parse(sessionValue) as T;
  return null;
}

export function getAccessToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("elroyy_access_token") ?? window.sessionStorage.getItem("elroyy_access_token");
}

export function getStoredUser(): SessionUser | null {
  const user = getStoredAuthValue<SessionUser>("elroyy_user");
  return user ?? null;
}

export function isAuthenticated() {
  return Boolean(getAccessToken());
}

export function logoutClient() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem("elroyy_access_token");
  window.localStorage.removeItem("elroyy_user");
  window.sessionStorage.removeItem("elroyy_access_token");
  window.sessionStorage.removeItem("elroyy_user");
}
