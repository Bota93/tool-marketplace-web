import { useEffect, useState } from "react";
import { getModules } from "./api";
import type { Module } from "./types";

type State =
    | { status: "loading" }
    | { status: "error"; message: string }
    | { status: "success"; data: Module[] };

export function ModulesPage() {
    const [state, setState] = useState<State>({ status: "loading" });

    useEffect(() => {
        let alive = true;

        getModules()
            .then((data) => {
                if (!alive) return;
                setState({ status: "success", data });
            })
            .catch((e: unknown) => {
                if (!alive) return;
                const message = e instanceof Error ? e.message : String(e);
                setState({ status: "error", message });
            });

            return () => {
                alive = false;
            };
    }, []);

    if (state.status === "loading") {
        return <div className="p-6">Cargando módulos...</div>;
    }

    if (state.status === "error") {
        return (
            <div className="p-6">
                <div className="text-lg font-semibold">Error</div>
                <div className="mt-2 text-sm opacity-80">{state.message}</div>
                <div className="mt-4 text-sm">
                    Revisa que el backend esté levantado y que{" "}
                    <code className="px-1 py-0.5 rounded border">VITE_API_BASE_URL</code>{" "}
                    apunte bien.
                </div>
            </div>
        );
    }

    const modules = state.data;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Modules</h1>

            {modules.length === 0 ? (
                <div className="opacity-70">No hay módules.</div>
            ) : (
                <ul className="grid gap-3">
                    {modules.map((m) => (
                        <li key={m.id} className="rounded-xl border p-4">
                            <div className="font-medium">{m.title}</div>
                            <div className="text-sm opacity-70">/{m.slug}</div>
                            {m.excerpt && (
                                <div className="text-sm mt-2 opacity-80">{m.excerpt}</div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}