export type ApiError = { message: string; status?: number; code?: string };

const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

function getAccessToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("elroyy_access_token") ?? window.sessionStorage.getItem("elroyy_access_token");
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!apiUrl) throw new Error("API is not configured.");
  const token = getAccessToken();
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(`${apiUrl}${path}`, { ...options, headers, signal: options.signal });
  if (!response.ok) {
    let message = "The request could not be completed.";
    let code: string | undefined;
    try {
      const body = (await response.json()) as { message?: string; error?: string; code?: string };
      message = body.message ?? body.error ?? message;
      code = body.code;
    } catch { /* Keep the safe fallback for non-JSON responses. */ }
    throw Object.assign(new Error(message), { status: response.status, code }) as ApiError;
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
