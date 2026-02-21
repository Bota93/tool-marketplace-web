import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "Web corporativa que convierte",
    desc: "Diseño sobrio, rápido y orientado a captación: contacto, WhatsApp, reservas o venta."
  },
  {
    title: "RGPD operativo (no “papel mojado”)",
    desc: "Textos legales, consentimiento, formularios, registro básico y plantillas para tu día a día."
  },
  {
    title: "Automatización y soporte",
    desc: "Reducimos tareas repetitivas con herramientas simples: emails, formularios, CRM y flujos."
  },
];

export function Services() {
  return (
    <Section className="bg-white text-slate-900 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight">Servicios</h2>
        <p className="mt-3 text-slate-600">
          Lo que necesitas para tener presencia, procesos y tranquilidad.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="/servicios" className="text-blue-600 font-semibold hover:text-blue-700">
          Ver detalles de cada servicio →
        </a>
      </div>
    </Section>
  );
}