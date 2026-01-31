import { env } from "@/config/env";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export class HttpError extends Error {
    status: number;
    body?: unknown;

    constructor(message:string, status:number, body?: unknown) {
        super(message);
        this.status = status;
        this.body = body;
    }
}

export async function http<T>(
    path:string,
    options?: {
        method?: HttpMethod;
        token?: string | null;
        body?: unknown;
        signal?: AbortSignal;
    }
): Promise<T> {
    const url = `${env.apiBaseUrl}${path}`;

    const res = await fetch(url, {
        method: options?.method ?? "GET",
        headers: {
            Accept: "application/json",
            ...(options?.body ? { "Content-Type": "application/json" } : {}),
            ...(options?.token ? { Authorization: `Bearer ${options.token}` } : {}),
        },
        body: options?.body ? JSON.stringify(options.body) : undefined,
        signal: options?.signal,
    });

    const raw = await res.text();
    const data = raw ? safeJson(raw) : null;

    if (!res.ok) {
        throw new HttpError(`HTTP ${res.status} calling ${path}`, res.status, data);
    }

    return data as T;
}

function safeJson(text: string) {
    try {
        return JSON.parse(text);
    } catch {
        return text;
    }
}