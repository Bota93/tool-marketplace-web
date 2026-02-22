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
        {services.map((s, idx) => (
          <div key={s.title} className={`rounded-2xl border p-6 transition hover:shadow-lg ${
            idx === 0 ? 'border-orange-200 bg-orange-50 hover:border-orange-300' : 'border-blue-200 bg-blue-50 hover:border-blue-300'
          }`}>
            <h3 className={`text-lg font-semibold ${
              idx === 0 ? 'text-orange-900' : 'text-blue-900'
            }`}>{s.title}</h3>
            <p className={`mt-3 ${
              idx === 0 ? 'text-orange-700' : 'text-blue-700'
            }`}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="/servicios" className="text-orange-600 font-semibold hover:text-orange-700">
          Ver detalles de cada servicio →
        </a>
      </div>
    </Section>
  );
}