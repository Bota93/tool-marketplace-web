const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
    throw new Error("VITE_API_BASE_URL no está definida.")
}

export const env = {
    apiBaseUrl,
};