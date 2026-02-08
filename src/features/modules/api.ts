import { http } from "@/shared/api/http";
import type { Module } from "./types";

type ModulesResponse = {
  data: Module[];
};

export async function getModules(): Promise<Module[]> {
  const res = await http<ModulesResponse>("/api/v1/modules");
  return res.data;
}
