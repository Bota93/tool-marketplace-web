import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entendemos tu negocio, objetivos y puntos débiles en web y RGPD."
  },
  {
    num: "02",
    title: "Propuesta",
    desc: "Presupuesto claro, timeline definido y alcance específico."
  },
  {
    num: "03",
    title: "Ejecución",
    desc: "Desarrollo, diseño, integración y despliegue en producción."
  },
  {
    num: "04",
    title: "Cumplimiento",
    desc: "Documentación, políticas, consentimiento y formación tu equipo."
  },
  {
    num: "05",
    title: "Lanzamiento",
    desc: "Testing, optimización y puesta en marcha con soporte inicial."
  },
  {
    num: "06",
    title: "Soporte",
    desc: "Mantenimiento, monitoreo y evolución continua de tu solución."
  },
];

export function Process() {
  return (
    <Section className="bg-white text-slate-900 py-20">
      <div id="process" className="max-w-4xl mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Cómo trabajamos
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Proceso transparente y ágil de inicio a fin.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, idx) => (
          <div key={step.num} className="relative">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </div>
            </div>
            {idx < steps.length - 1 && idx % 3 !== 2 && (
              <ArrowRight className="absolute -right-12 top-6 h-5 w-5 text-slate-300 hidden lg:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
