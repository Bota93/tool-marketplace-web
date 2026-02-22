import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Equipo especializado",
    desc: "Expertos en web development y data protection. Sin mediadores, contacto directo."
  },
  {
    title: "Desde cero o renovación",
    desc: "Comenzamos con diagnóstico. Adaptado a tu presupuesto y necesidades reales."
  },
  {
    title: "Cumplimiento garantizado",
    desc: "No es teoría: textos, procesos y sistemas listos para operar y auditorías."
  },
  {
    title: "Soporte continuo",
    desc: "Después del lanzamiento: mantenimiento, actualizaciones y evolución de tu web."
  },
  {
    title: "Sin costes ocultos",
    desc: "Presupuesto transparente. Sabes qué tienes, cuándo y cuánto pagas."
  },
  {
    title: "Resultados medibles",
    desc: "Analytics, conversiones, seguridad. Métricas claras de ROI y protección."
  },
];

export function WhyUs() {
  return (
    <Section className="bg-slate-50 text-slate-900 py-20">
      <div id="why-us" className="max-w-4xl mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Por qué somos diferentes
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Combinamos experiencia técnica con responsabilidad. No hacemos webs bonitas para guardarlas en un cajón.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {reasons.map((reason) => (
          <div key={reason.title} className="flex gap-4">
            <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-slate-600">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
