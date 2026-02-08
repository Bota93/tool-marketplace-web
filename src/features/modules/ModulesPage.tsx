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
    getModules()
      .then((data) => {
        setState({ status: "success", data });
      })
      .catch((err) => {
        setState({
          status: "error",
          message: err instanceof Error ? err.message : "Error desconocido",
        });
      });
  }, []);

  if (state.status === "loading") {
    return <div className="p-6">Cargando módulos…</div>;
  }

  if (state.status === "error") {
    return (
      <div className="p-6 text-red-600">
        Error cargando módulos: {state.message}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Módulos</h1>

      {state.data.length === 0 ? (
        <div>No hay módulos.</div>
      ) : (
        <ul className="space-y-3">
          {state.data.map((m) => (
            <li key={m.id} className="border rounded-lg p-4">
              <div className="font-medium">{m.title}</div>
              <div className="text-sm opacity-70">/{m.slug}</div>
              {m.excerpt && (
                <p className="mt-2 text-sm opacity-80">{m.excerpt}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
