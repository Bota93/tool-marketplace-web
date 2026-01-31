import { http } from "@/shared/api/http";
import type { Module } from "./types";

export async function getModules(): Promise<Module[]> {
    // Caso 1 (ideal) la API devuelve un array directo
    const res = await http<Module[] | { data: Module[] }>("/api/v1/modules");

    // Caso 2: la API devuelve { data: [...] }
    if (typeof res === "object" && res != null && "data" in res) {
        return (res as { data: Module[] }).data;
    }
    
    return res as Module[];
}