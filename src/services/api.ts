export type ApiError = { message: string; status?: number };

const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!apiUrl) throw new Error("API is not configured.");
  const response = await fetch(`${apiUrl}${path}`, { ...options, headers: { "Content-Type": "application/json", ...options.headers } });
  if (!response.ok) {
    let message = "The request could not be completed.";
    try { const body = (await response.json()) as { message?: string; error?: string }; message = body.message ?? body.error ?? message; } catch { /* Use the safe fallback message. */ }
    throw Object.assign(new Error(message), { status: response.status });
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
