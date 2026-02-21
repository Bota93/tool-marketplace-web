import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const serviceDetails = [
  {
    id: "web",
    icon: Globe,
    title: "Web corporativa que convierte",
    description: "Diseño sobrio, rápido y orientado a captación: contacto, WhatsApp, reservas o venta.",
    features: [
      "Diseño responsive y moderno",
      "Optimizado para conversiones",
      "Integración con WhatsApp y CRM",
      "Velocidad y SEO optimizados",
      "Dashboard de análisis",
      "Mantenimiento incluido (3 meses)"
    ]
  },
  {
    id: "rgpd",
    icon: Shield,
    title: "RGPD operativo (no 'papel mojado')",
    description: "Textos legales, consentimiento, formularios, registro básico y plantillas para tu día a día.",
    features: [
      "Políticas legales redactadas",
      "Banner de consentimiento",
      "Formularios RGPD-compliant",
      "Registro de actividades",
      "Plantillas de procedimientos",
      "Formación básica para equipo"
    ]
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automatización y soporte",
    description: "Reducimos tareas repetitivas con herramientas simples: emails, formularios, CRM y flujos.",
    features: [
      "Automatización de emails",
      "CRM ligero integrado",
      "Flujos de trabajo personalizados",
      "Integración con herramientas existentes",
      "Dashboards de métricas",
      "Soporte técnico continuo"
    ]
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-dvh bg-slate-950">
      <Header />
      <main>
        <Section className="bg-slate-900 text-white pt-20 pb-12">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Nuestros Servicios
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Soluciones integral para tu web, cumplimiento y operaciones automatizadas.
              </p>
            </div>
          </Container>
        </Section>

        {serviceDetails.map((service) => {
          const Icon = service.icon;
          return (
            <Section key={service.id} className={`${service.id === "web" || service.id === "automation" ? "bg-white text-slate-900" : "bg-slate-50 text-slate-900"} py-16`}>
              <Container>
                <div className="grid gap-12 md:grid-cols-2 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                    <a href="#contact">
                      <Button className="inline-flex items-center gap-2">
                        Contratar servicio <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>
          );
        })}

        <Section className="bg-blue-50 text-slate-900 py-16">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">¿Necesitas más información?</h2>
              <p className="text-slate-600 mb-8">
                Contacta con nosotros para una consulta personalizada sin compromiso.
              </p>
              <a href="#contact">
                <Button>Solicitar diagnóstico</Button>
              </a>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
